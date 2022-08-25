import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
import { createHtmlPlugin } from 'vite-plugin-html';
import * as path from 'path';

type SEO = {
  title: string;
  keywords: string;
  description: string;
  image?: string;
};

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const starterKitMetas: SEO = {
    title: 'Starter Kit',
    keywords: 'Sample keyword',
    description: 'Sample description',
    image: ''
  };

  const seo: SEO = starterKitMetas;

  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@starterkit': path.resolve(__dirname, './starter-kit')
      }
    },
    server: {
      fs: {
        allow: ['..']
      }
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: seo
        }
      })
    ],
    build: {
      outDir: 'build',
      rollupOptions: {
        plugins: [inject({ Buffer: ['buffer', 'Buffer'] })]
      }
    }
  });
};
