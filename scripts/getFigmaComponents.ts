import { pipe } from '@effect/data/Function';
import * as Effect from '@effect/io/Effect';
import { dedent } from 'ts-dedent';

import { FigmaRepository } from './FigmaRepository.js';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID!; // e.g. GZ4a....

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const FIGMA_NODE_ID = process.env.FIGMA_NODE_ID!; // e.g. 1234:5679;

export const getFigmaComponents = () =>
  pipe(
    Effect.gen(function*($) {
      const figmaRepository = yield* $(FigmaRepository);
      const { nodes } = yield* $(figmaRepository.getFileNodes(FIGMA_FILE_ID, FIGMA_NODE_ID));
      const { components } = nodes[FIGMA_NODE_ID];
      const componentIds = Object.keys(components);

      const images = yield* $(
        Effect.forEachPar(
          componentIds,
          componentId => figmaRepository.getImage(FIGMA_FILE_ID, componentId),
        ),
      );

      return componentIds.map((componentId, index) => ({
        id: componentId,
        imageUrl: images[index],
        name: `Icon${components[componentId].name}`.replace(/Icon\//, ''),
      }));
    }),
    Effect.catchTags({
      GetFileNodesError: reason =>
        Effect.fail(dedent`
          Figma API를 통해 디자인 시스템 내의 아이콘 노드 데이터를 가져오는 중 오류가 발생했습니다. (${reason._tag})

          ---

          ${JSON.stringify(reason.error.data)}
        `),
      GetImageError: reason =>
        Effect.fail(dedent`
          Figma API를 통해 아이콘 이미지를 가져오는 중 오류가 발생했습니다. (${reason._tag})
          요청 컴포넌트 ID 리스트: ${reason.requestComponentIds.join(', ')}

          ---

          ${JSON.stringify(reason.error.data)}
        `),
    }),
  );

export type FigmaComponent = ReturnType<typeof getFigmaComponents> extends Effect.Effect<unknown, unknown, infer R>
  ? R extends Array<infer E> ? E : never
  : never;
