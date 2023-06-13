import * as Context from '@effect/data/Context';
import * as Data from '@effect/data/Data';
import { pipe } from '@effect/data/Function';
import * as Effect from '@effect/io/Effect';
import * as Layer from '@effect/io/Layer';
import * as Request from '@effect/io/Request';
import * as RequestResolver from '@effect/io/RequestResolver';
import * as S from '@effect/schema/Schema';
import { FetchError } from 'ofetch';

import { Fetch } from './Fetch.js';

const FIGMA_API_ENDPOINT = 'https://api.figma.com';
const GET_IMAGE_BATCH_SIZE = 50;

export interface GetFileNodesError extends Data.Case {
  readonly _tag: 'GetFileNodesError';
  readonly error: FetchError;
}

export const GetFileNodesError = Data.tagged<GetFileNodesError>('GetFileNodesError');

export const GetFileNodesOutput = S.struct({
  nodes: S.record(
    S.string,
    S.struct({
      components: S.record(
        S.string,
        S.struct({
          name: S.string,
        }),
      ),
    }),
  ),
});

export type GetFileNodesOutput = S.To<typeof GetFileNodesOutput>;

export interface GetImageError extends Data.Case {
  readonly _tag: 'GetImageError';
  readonly error: FetchError;
  readonly requestComponentIds: string[];
}

export const GetImageError = Data.tagged<GetImageError>('GetImageError');

export interface GetImage extends Request.Request<GetImageError, string> {
  readonly _tag: 'GetImage';
  readonly componentId: string;
  readonly fileId: string;
}

export const GetImage = Request.tagged<GetImage>('GetImage');

const GetImageOutput = S.struct({
  images: S.record(S.string, S.string),
});

export interface FigmaRepository {
  getFileNodes(fileId: string, nodeId: string): Effect.Effect<Fetch, GetFileNodesError, GetFileNodesOutput>;
  getImage(fileId: string, componentId: string): Effect.Effect<Fetch, GetImageError, string>;
}

export const FigmaRepository = Context.Tag<FigmaRepository>('FigmaRepository');

export const FigmaRepositoryLive = Layer.succeed(FigmaRepository, {
  getFileNodes: (fileId: string, nodeId: string) =>
    pipe(
      Fetch,
      Effect.flatMap(fetch =>
        Effect.tryCatchPromise(
          () => fetch(new URL(`/v1/files/${fileId}/nodes?ids=${nodeId}`, FIGMA_API_ENDPOINT).toString()),
          (error) => GetFileNodesError({ error: error as FetchError }),
        )
      ),
      Effect.map(S.parse(GetFileNodesOutput)),
    ),
  getImage: (fileId: string, componentId: string) =>
    Effect.request(GetImage({ componentId, fileId }), GetImageResolver),
});

const GetImageResolver = pipe(
  RequestResolver.makeBatched((requests: GetImage[]) => (
    pipe(
      Fetch,
      Effect.flatMap(fetch => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const fileId = requests.at(0)!.fileId;
        const requestComponentIds = requests.map(({ componentId }) => componentId);

        const url = new URL(`/v1/images/${fileId}`, FIGMA_API_ENDPOINT);
        url.searchParams.append('ids', requestComponentIds.join(','));
        url.searchParams.append('format', 'svg');

        return pipe(
          Effect.tryCatchPromise(
            () => fetch(String(url)),
            (error) => GetImageError({ error: error as FetchError, requestComponentIds }),
          ),
          Effect.map(S.parse(GetImageOutput)),
        );
      }),
      Effect.flatMap(output =>
        Effect.forEach(requests, request => (
          Request.completeEffect(
            request,
            Effect.succeed(output.images[request.componentId]),
          )
        ))
      ),
      Effect.catchAll(error => (
        Effect.forEach(requests, request => (
          Request.completeEffect(request, Effect.fail(error))
        ))
      )),
    )
  )),
  RequestResolver.batchN(GET_IMAGE_BATCH_SIZE),
  RequestResolver.contextFromServices(Fetch),
);
