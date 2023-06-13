import * as Context from '@effect/data/Context';
import * as Data from '@effect/data/Data';
import * as Effect from '@effect/io/Effect';
import * as Layer from '@effect/io/Layer';
import { transform } from '@svgr/core';
import fs from 'fs-extra';
import { ofetch } from 'ofetch';

interface DownloadIconError extends Data.Case {
  readonly _tag: 'DownloadIconError';
  readonly imageUrl: string;
}

const DownloadIconError = Data.tagged<DownloadIconError>('DownloadIconError');

interface ConvertSvgToReactComponentCodeError extends Data.Case {
  readonly _tag: 'ConvertSvgToReactComponentCodeError';
  readonly componentName: string;
  readonly svgCode: string;
}

const ConvertSvgToReactComponentCodeError = Data.tagged<ConvertSvgToReactComponentCodeError>(
  'ConvertSvgToReactComponentCodeError',
);

interface WriteReactComponentFileError extends Data.Case {
  readonly _tag: 'WriteReactComponentFileError';
  readonly componentName: string;
  readonly error: Error;
  readonly reactComponentCode: string;
}

const WriteReactComponentFileError = Data.tagged<WriteReactComponentFileError>('WriteReactComponentFileError');

interface WriteIndexFileError extends Data.Case {
  readonly _tag: 'WriteIndexFileError';
}

const WriteIndexFileError = Data.tagged<WriteIndexFileError>('WriteIndexFileError');

export interface IconRepository {
  convertSvgToReactComponentCode(
    svgCode: string,
    componentName: string,
  ): Effect.Effect<never, ConvertSvgToReactComponentCodeError, string>;
  downloadIcon(imageUrl: string): Effect.Effect<never, DownloadIconError, string>;
  resetOutputDirectory(): Effect.Effect<never, never, void>;
  writeIndexFile(componentNames: string[]): Effect.Effect<never, WriteIndexFileError, void>;
  writeReactComponentFile(
    reactComponentCode: string,
    componentName: string,
  ): Effect.Effect<never, WriteReactComponentFileError, void>;
}

export const IconRepository = Context.Tag<IconRepository>('IconRepository');

export const IconRepositoryLive = Layer.succeed(IconRepository, {
  convertSvgToReactComponentCode(svgCode, componentName) {
    return Effect.tryCatchPromise(
      () =>
        transform(svgCode, {
          exportType: 'named',
          icon: true,
          jsxRuntime: 'automatic',
          namedExport: componentName,
          ref: true,
          typescript: true,
        })
          .then(code =>
            code
              .replace(/fillOpacity={.+?}/g, '')
              .replace(/fill="((?!none).+?)"/g, 'fill="currentColor"')
              .replace(/stroke="((?!none).+?)"/g, 'stroke="currentColor"')
              .concat(`ForwardRef.displayName = '${componentName}';`)
          ),
      () => ConvertSvgToReactComponentCodeError({ componentName, svgCode }),
    );
  },
  downloadIcon(imageUrl) {
    return Effect.tryCatchPromise(
      () => ofetch(imageUrl, { responseType: 'text' }),
      () => DownloadIconError({ imageUrl }),
    );
  },
  resetOutputDirectory() {
    return Effect.sync(() => {
      fs.emptyDirSync('./src');
    });
  },
  writeIndexFile(componentNames) {
    return Effect.tryCatchPromise(
      () =>
        fs.writeFile(
          './src/index.ts',
          componentNames
            .map((componentName) => `export { ${componentName} } from './${componentName}.js';`)
            .join('\n'),
        ),
      () => WriteIndexFileError(),
    );
  },
  writeReactComponentFile(reactComponentCode, componentName) {
    return Effect.tryCatchPromise(
      () => fs.writeFile(`./src/${componentName}.tsx`, reactComponentCode),
      (error) => WriteReactComponentFileError({ componentName, error: error as Error, reactComponentCode }),
    );
  },
});
