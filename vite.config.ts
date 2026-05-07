/// <reference types="vitest/config" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import {playwright} from '@vitest/browser-playwright';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        svgr({
            svgrOptions: {
                exportType: 'default',
                svgo: false,
                jsxRuntime: 'automatic',
            },
        }),
        dts({
            tsconfigPath: 'tsconfig.json',
            include: ['src/'],
            outDirs: 'dist',
            staticImport: true,
            entryRoot: 'src',
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, './src/main.tsx'),
            name: 'react-charging-station-connector-icons',
            fileName: (format) => `rcsci.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                exports: 'auto',
                codeSplitting: false,
                preserveModules: false,
            },
        },
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    test: {
        globals: true,
        clearMocks: true,
        maxConcurrency: 8,
        testTimeout: 20000,
        coverage: {
            reporter: ['text', 'html', 'clover', 'json', 'cobertura'],
            include: ['src/**'],
            exclude: [],
            provider: 'v8',
        },
        browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            screenshotFailures: true,
            instances: [
                {
                    browser: 'chromium',
                    provider: playwright({
                        launchOptions: {
                            args: ['--disable-web-security'],
                        },
                    }),
                    viewport: {width: 1280, height: 720},
                },
            ],
            expect: {
                toMatchScreenshot: {
                    comparatorName: 'pixelmatch',
                    comparatorOptions: {
                        // 0-1, how different can colors be?
                        threshold: 0.2,
                        // 1% of pixels can differ
                        allowedMismatchedPixelRatio: 0.05,
                    },
                },
            },
        },
        server: {
            deps: {
                inline: [/^(?!.*vitest).*$/],
            },
        },
    },
});
