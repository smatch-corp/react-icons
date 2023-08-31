import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    declaration: true,
    entries: [
        './src/index.ts',
        {
            builder: 'mkdist',
            input: './src',
            outDir: './dist',
        },
    ],
    rollup: {
        emitCJS: true,
    },
});
