import { defineConfig } from 'astro/config';
import AstroCompress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [AstroCompress()],
});
