import { node } from '../../electron-vendors.config.json';
import { join } from 'path';
import { builtinModules } from 'module';
import fg from 'fast-glob'

const PACKAGE_ROOT = __dirname;


/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: process.cwd(),
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  build: {
    sourcemap: 'inline',
    target: `node${node}`,
    outDir: 'dist',
    assetsDir: '.',
    minify: process.env.MODE === 'development' ? false : 'terser',
    terserOptions: {
      ecma: 2020,
      compress: {
        passes: 2,
      },
      safari10: false,
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [
        'electron',
        'electron-devtools-installer',
        ...builtinModules,
      ],
      output: {
        entryFileNames: '[name].cjs',
      },
    },
    emptyOutDir: true,
    brotliSize: false,
  },
  plugins: [
    {
      name: 'watch-language-files',
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      async buildStart() {
        const files = await fg('packages/main/public/lang/*.json');
        for (let file of files) {
          this.addWatchFile(file)
        }
      }
    }
  ]
};

export default config;
