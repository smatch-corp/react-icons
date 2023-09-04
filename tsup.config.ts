import fse from 'fs-extra';
import { Options, defineConfig } from 'tsup';

export default defineConfig(options => {
    const commonOptions: Partial<Options> = {
        entry: ['src/*.{ts,tsx}'],
        skipNodeModulesBundle: true,
        sourcemap: true,
        splitting: true,
        treeshake: 'smallest',
        ...options,
    };

    return [
        // Standard ESM, embedded `process.env.NODE_ENV` checks
        {
            ...commonOptions,
            clean: true,
            dts: true,
            format: ['esm'],
            async onSuccess() {
                // Support Webpack 4 by pointing `"module"` to a file with a `.js` extension
                fse.copyFileSync('dist/index.mjs', 'dist/index.legacy-esm.js');
            },
            outExtension: () => ({ js: '.mjs' }),
        },
        // Browser-ready ESM, production + minified
        {
            ...commonOptions,
            define: { 'process.env.NODE_ENV': JSON.stringify('production') },
            entry: {
                'index.browser': 'src/index.ts',
            },
            format: ['esm'],
            minify: true,
            outExtension: () => ({ js: '.mjs' }),
        },
        {
            ...commonOptions,
            dts: true,
            format: 'cjs',
            outDir: './dist/cjs/',
            outExtension: () => ({ js: '.cjs' }),
        },
    ];
});
