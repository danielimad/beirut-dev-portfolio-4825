To create a `vite.config.ts` file for a simple web developer portfolio project as described, we'll configure it for a Vite TypeScript project with React. Here's a basic configuration aligning with your specifications:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Integrating React plugin for Vite
  ],
  resolve: {
    alias: {
      // Setup for absolute path imports
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true, // Automatically open the app in the browser
    host: 'localhost',
    port: 3000, // Default port for the dev server
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Entry point
      },
    },
    // Optimizing the build
    minify: 'esbuild', // Using esbuild for minification
    target: 'esnext', // Ensures modern output
    sourcemap: true, // Generate source maps
  },
  // Ensuring cross-platform compatibility
  envPrefix: 'VITE_',
});
```

### Key Notes:
- **Frontend Configuration**: The `react()` plugin supports React development with Vite.
  
- **Entry Point**: The build configuration uses `index.html` as the entry, and it compiles the `main.ts` script which should be included in your HTML file inside the `<script type="module">` tag.

- **Alias Configuration**: The alias setup allows you to use `@/` as a shortcut in your import statements, referencing the `src` directory.

- **Development Server**: Configured to run on `localhost:3000` and automatically open the app in the default browser upon starting the dev server.

- **Build Optimization**: The build process is streamlined using `esbuild` to minimize the bundle and generate source maps, allowing easier debugging in production.

- **Source Maps**: Enabled to provide mappings from your original source files to the minified output (useful during debugging).

- **Cross-Platform**: The `envPrefix` is set for environment variables, typical for setups that could push into environments like Vercel or Netlify (for seamless CI/CD operations).

This `vite.config.ts` should be placed in the root directory of your project so Vite can utilize it when starting and building your application.