import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    declaration: true,
    entries: [
        {
            builder: 'mkdist',
            esbuild: { jsx: 'automatic' },
            ext: 'js',
            format: 'cjs',
            input: './src',
            outDir: './dist',
        },
        {
            builder: 'mkdist',
            esbuild: { jsx: 'automatic' },
            ext: 'mjs',
            format: 'esm',
            input: './src',
            outDir: './dist',
        },
    ],
});
