import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/base.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
});
