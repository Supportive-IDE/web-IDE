import { defineConfig } from 'vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
// import { dirname, join } from 'path';
// import { fileURLToPath } from 'url';

// const PYODIDE_EXCLUDE = [
//   "!**/*.{md,html}",
//   "!**/*.d.ts",
//   "!**/*.whl",
//   "!**/node_modules",
// ];

// export function viteStaticCopyPyodide() {
//   const pyodideDir = dirname(fileURLToPath(import.meta.resolve("pyodide")));
//   return viteStaticCopy({
//     targets: [
//       {
//         src: [join(pyodideDir, "*").replace(/\\/g, "/")].concat(PYODIDE_EXCLUDE),
//         dest: "assets",
//       },
//     ],
//   });
// }

export default defineConfig({
    base: "https://supportive-ide.github.io/web-IDE/",
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
    // optimizeDeps: { exclude: ["pyodide"] },
    // plugins: [viteStaticCopyPyodide()],
    server: { // Needed to enable input in pyodide
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin", 
            "Cross-Origin-Embedder-Policy": "require-corp"
        }
    },
    worker: {
        format: "es"
    },
})