// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
function copyPublicSafe() {
  return {
    name: "copy-public-safe",
    apply: "build",
    closeBundle() {
      const publicDir = path.resolve(__vite_injected_original_dirname, "public");
      const outDir = path.resolve(__vite_injected_original_dirname, "dist");
      const entries = fs.readdirSync(publicDir);
      for (const entry of entries) {
        const src = path.join(publicDir, entry);
        const dest = path.join(outDir, entry);
        try {
          fs.copyFileSync(src, dest);
        } catch {
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), copyPublicSafe()],
  build: {
    copyPublicDir: false
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGNvcHlQdWJsaWNTYWZlKCk6IGltcG9ydCgndml0ZScpLlBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2NvcHktcHVibGljLXNhZmUnLFxuICAgIGFwcGx5OiAnYnVpbGQnLFxuICAgIGNsb3NlQnVuZGxlKCkge1xuICAgICAgY29uc3QgcHVibGljRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuICAgICAgY29uc3Qgb3V0RGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKTtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBmcy5yZWFkZGlyU3luYyhwdWJsaWNEaXIpO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHBhdGguam9pbihwdWJsaWNEaXIsIGVudHJ5KTtcbiAgICAgICAgY29uc3QgZGVzdCA9IHBhdGguam9pbihvdXREaXIsIGVudHJ5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gc2tpcCBsb2NrZWQvaW5hY2Nlc3NpYmxlIGZpbGVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgY29weVB1YmxpY1NhZmUoKV0sXG4gIGJ1aWxkOiB7XG4gICAgY29weVB1YmxpY0RpcjogZmFsc2UsXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxTQUFTLGlCQUF3QztBQUMvQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQ1osWUFBTSxZQUFZLEtBQUssUUFBUSxrQ0FBVyxRQUFRO0FBQ2xELFlBQU0sU0FBUyxLQUFLLFFBQVEsa0NBQVcsTUFBTTtBQUM3QyxZQUFNLFVBQVUsR0FBRyxZQUFZLFNBQVM7QUFDeEMsaUJBQVcsU0FBUyxTQUFTO0FBQzNCLGNBQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLO0FBQ3RDLGNBQU0sT0FBTyxLQUFLLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUk7QUFDRixhQUFHLGFBQWEsS0FBSyxJQUFJO0FBQUEsUUFDM0IsUUFBUTtBQUFBLFFBRVI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBQUEsRUFDbkMsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
