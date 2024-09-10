import { defineConfig } from 'vite';

export default defineConfig({
  base: '/webovio',

  build: {
    outDir: 'dist',

    rollupOptions: {
      output: {
        assetFileNames: ({ name, extname }) => {
          let extType = name.split('.').at(1);
          if (/gif|jpe?g|png|svg|webp/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }

          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return 'assets/fonts/[name][extname]';
          }

          if (/ttf/.test(extType)) {
            return 'assets/fonts/[name][extname]';
          }

          // if (/\.css$/.test(name ?? '')) {
          //   return 'assets/css/[name]-[hash][extname]';
          // }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  plugins: [

  ],
});
