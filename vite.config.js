import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://supportive-ide.github.io/web-IDE/",
    build: {
        outDir: 'docs',
        emptyOutDir: true, // also necessary
    }
})