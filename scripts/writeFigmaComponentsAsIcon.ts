import { pipe } from '@effect/data/Function';
import * as Effect from '@effect/io/Effect';
import { dedent } from 'ts-dedent';

import { IconRepository } from './IconRepository.js';
import { FigmaComponent } from './getFigmaComponents.js';

export const writeFigmaComponentsAsIcon = (components: FigmaComponent[]) =>
  pipe(
    Effect.gen(function*($) {
      const iconRepository = yield* $(IconRepository);

      const svgCodes = yield* $(
        Effect.forEachPar(
          components.map(({ imageUrl }) => imageUrl),
          iconRepository.downloadIcon,
        ),
      );

      const reactComponentCodes = yield* $(
        Effect.forEachParWithIndex(
          components,
          (component, index) =>
            iconRepository.convertSvgToReactComponentCode(
              svgCodes[index],
              component.name,
            ),
        ),
      );

      yield* $(iconRepository.resetOutputDirectory());

      yield* $(
        Effect.forEachParWithIndex(
          components,
          (component, index) =>
            iconRepository.writeReactComponentFile(
              reactComponentCodes[index],
              component.name,
            ),
        ),
        Effect.withParallelism(10),
      );

      yield* $(iconRepository.writeIndexFile(components.map(({ name }) => name)));
    }),
    Effect.catchTags({
      ConvertSvgToReactComponentCodeError: reason =>
        Effect.fail(dedent`
          SVG 코드를 리액트 컴포넌트 코드로 변경 중 오류가 발생했습니다. (${reason._tag})

          ---

          컴포넌트: ${reason.componentName}
          코드:
          ${reason.svgCode}
        `),
      DownloadIconError: reason =>
        Effect.fail(dedent`
          아이콘 이미지를 다운로드 중 오류가 발생했습니다. (${reason._tag})
          주소: ${reason.imageUrl}
        `),
      WriteIndexFileError: reason =>
        Effect.fail(dedent`
          인덱스 파일을 작성 중 오류가 발생했습니다. (${reason._tag})
        `),
      WriteReactComponentFileError: reason =>
        Effect.fail(dedent`
          리액트 컴포넌트 파일을 작성 중 오류가 발생했습니다. (${reason._tag})
          컴포넌트: ${reason.componentName}
          코드:
          ${reason.reactComponentCode}

          ---
          
          ${reason.error}
        `),
    }),
  );
