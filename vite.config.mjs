import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName(format, entryName) {
        const ext = format === 'es' ? 'mjs' : 'cjs';

        return [entryName, ext].join('.');
      },
      formats: ['cjs', 'es'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: (id) => {
        return (
          !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/')
        );
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    sourcemap: true,
  },
  plugins: [dts()],
});
