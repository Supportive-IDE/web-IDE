import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://supportive-ide.github.io/web-IDE/",
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
    server: { // Needed to enable webworker for input in pyodide
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin", 
            "Cross-Origin-Embedder-Policy": "require-corp"
        }
    },
    worker: {
        format: "es"
    },
})