import * as Context from '@effect/data/Context';
import * as Layer from '@effect/io/Layer';
import { ofetch } from 'ofetch';

export type Fetch = typeof ofetch;

export const Fetch = Context.Tag<Fetch>();

export const FetchLive = Layer.succeed(
  Fetch,
  ofetch.create({
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      'x-figma-token': process.env.FIGMA_API_TOKEN!, // e.g. figd_...
    },
  }),
);
