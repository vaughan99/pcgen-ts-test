import { defineConfig, PluginOption, ViteDevServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { $ } from 'execa';
import fs from 'node:fs/promises';
import path from 'node:path';

const neuConfig = JSON.parse(await fs.readFile('neutralino.config.json', 'utf8'));
const neuResourcesRoot = '.' + neuConfig.cli.resourcesPath;
let launchedNeutralino = false;

/** Vite plugin to run Neutralino and build it when needed */
const neutralino = [
    {
        name: 'vite-plugin-neutralino:copy-icon',
        enforce: 'post',

        buildStart: async () => {
            // Copy the app icon when developing an app
            await fs.mkdir('./app', { recursive: true });

            await fs.copyFile('public/icon.png', path.join(neuResourcesRoot + '/icon.png'));
        }
    },

    {
        name: 'vite-plugin-neutralino:serve',
        apply: 'serve',
        enforce: 'post',

        configureServer: async (server: ViteDevServer) => {
            // Start Neutralino when the Vite server starts and use Vite server
            server.httpServer?.once('listening', async () => {
                if (launchedNeutralino) {
                    return;
                }

                const address = server.httpServer?.address();

                if (!address || typeof address === 'string') {
                    throw new Error('Failed to get server address');
                }

                const protocol = server.config.server.https ? 'https' : 'http',
                    host = '127.0.0.1',
                    port = address.port;

                await $`npx @neutralinojs/neu run -- --url=${protocol}://${host}:${port} --window-enable-inspector=true --icon=/app/icon.png`;
                launchedNeutralino = true;
            });
        }
    },

    {
        name: 'vite-plugin-neutralino:build',
        apply: 'build',
        enforce: 'post',

        closeBundle: async () => {
            // Build Neutralino after Vite builds
            await $`npx @neutralinojs/neu build`;

            console.log(`✓ Neutralino build completed. Build artifacts are located in "${path.resolve(path.join('./dist', neuConfig.cli.binaryName))}" folder.`);
        }
    }
] as PluginOption[];

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), svelte(), ...neutralino ],
    server: { host: '127.0.0.1', open: false },
    build: {
        outDir: neuResourcesRoot,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                // Define other pages here
                index2: path.resolve(__dirname, 'index2.html'),
                // Add more pages as needed, e.g.:
                // about: resolve(__dirname, 'about.html'), 
            },
        },
    },
    resolve: {
        alias: {
            $lib: path.resolve('./src/lib'),
        },
    },
});
