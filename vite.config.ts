import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function readPackageHomepage(): string {
  try {
    const raw = readFileSync(path.join(__dirname, "package.json"), "utf-8");
    const pkg = JSON.parse(raw) as { homepage?: string };
    if (typeof pkg.homepage === "string" && /^https?:\/\//.test(pkg.homepage)) {
      return pkg.homepage.replace(/\/$/, "");
    }
  } catch {
    /* ignore */
  }
  return "";
}

/** WhatsApp / LinkedIn need absolute https URLs for og:image — not paths like /og-image.jpg */
function publicSiteUrl(env: Record<string, string>): string {
  const fromEnv = (env.VITE_SITE_URL ?? "").replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  if (process.env.CF_PAGES_URL) return process.env.CF_PAGES_URL.replace(/\/$/, "");
  if (process.env.URL) return process.env.URL.replace(/\/$/, "");
  return readPackageHomepage();
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = publicSiteUrl(env);

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      {
        name: "absolute-open-graph-urls",
        transformIndexHtml(html) {
          if (!siteUrl) return html;
          const imageUrl = `${siteUrl}/og-image.jpg`;
          let out = html
            .replace(/content="\/og-image\.jpg"/g, `content="${imageUrl}"`)
            .replace(
              /<meta property="og:type" content="website" \/>/,
              `<meta property="og:url" content="${siteUrl}/" />\n    <meta property="og:type" content="website" />`
            );
          return out;
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
