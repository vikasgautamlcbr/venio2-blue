import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import react from '@astrojs/react';

import userConfig from './clouduser.astro.config.mjs';

const webflowOverrides = {
  base: "/app",
  output: "server",
  adapter: cloudflare({
    imageService: "custom",
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [react()],
  vite: {
    ...userConfig.vite,
    resolve: {
      ...userConfig.vite?.resolve,
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined,
    },
  },

  build: {
    assetsPrefix: "https://f40aa93a-2275-4df5-baec-8a83742842f4.wf-app-prod.cosmic.webflow.services/app"
  },

  image: {
    ...userConfig.image,
    service: {
      entrypoint: "./webflow-loader.ts",
      config: {
        deployUrl: "https://f40aa93a-2275-4df5-baec-8a83742842f4.wf-app-prod.cosmic.webflow.services",
        mountPath: "/app"
      }
    },
  }
};

// https://astro.build/config
export default defineConfig({
  ...userConfig,
  ...webflowOverrides,
});