import { defineConfig } from 'vite';

// The starter ships without @vitejs/plugin-react; esbuild's automatic JSX runtime
// lets components omit `import React` without adding a dependency.
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
});
