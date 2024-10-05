import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  let usePolling = (mode === "production")? false:true;

  let base = (mode === "production")? "/emoji-quest/":"/";

  return {
    plugins: [react()],
    base: base,
    server: {
      watch: {
        usePolling: usePolling
      }
    }
  };
});

