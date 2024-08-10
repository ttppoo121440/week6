import { defineConfig, loadEnv, UserConfig, ConfigEnv } from "vite";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import liveReload from "vite-plugin-live-reload";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { globSync } from "glob";

function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post" as const,
    apply: "build" as const,
    async generateBundle(options: any, bundle: any) {
      for (const fileName in bundle) {
        if (fileName.startsWith("src/pages/")) {
          const newFileName = fileName.slice("src/pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: mode === "development" ? "/" : env.VITE_BASE_URL || "/",
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/pages/index.html"),
          ...Object.fromEntries(
            globSync("src/pages/**/*.html").map((file) => [
              path.relative(
                "src/pages",
                file.slice(0, file.length - path.extname(file).length),
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
          ),
        },
      },
      outDir: "dist",
    },
    server: {
      port: 3000,
      open: "/src/pages/index.html",
      fs: {
        allow: [resolve(__dirname, "src"), resolve(__dirname, "src/pages")],
      },
    },
    plugins: [
      tsconfigPaths(),
      liveReload([
        "./src/layout/**/*.ejs",
        "./src/pages/**/*.ejs",
        "./src/pages/**/*.html",
      ]),
      ViteEjsPlugin({
        base: mode === "development" ? "/src/pages/" : env.VITE_BASE_URL || "/",
      }),
      moveOutputPlugin(),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer],
      },
    },
  };
});
