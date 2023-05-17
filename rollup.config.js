import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import globals from 'rollup-plugin-node-globals';
import babel from '@rollup/plugin-babel';
import svg from 'rollup-plugin-svg';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';


const env = process.env.NODE_ENV;

const config = [
    {
        input: 'src/main.tsx',
        output: [
            {
                file: 'dist/umd/react-charging-station-connector-icons.js',
                format: 'umd',
                sourcemap: true,
                globals: {
                    'react': 'React',
                },
                name: 'react-charging-station-connector-icons',
                inlineDynamicImports: true,
                exports: 'auto',
            },
            {
                file: 'dist/esm/index.js',
                format: 'esm',
                sourcemap: true,
                globals: {
                    'react': 'React',
                },
                name: 'react-charging-station-connector-icons',
                inlineDynamicImports: true,
                exports: 'auto',
            },
        ],
        plugins: [
            svg(),
            nodeResolve({
                browser: true,
                preferBuiltins: true,
                extensions: ['.js', '.ts', '.tsx'],
            }),
            commonjs({
                exclude: 'src/**',
            }),
            babel({
                extensions: ['.js', '.ts', '.jsx', '.tsx'],
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
            }),
            globals(),
            replace({
                'process.env.NODE_ENV': JSON.stringify(env === 'production' ? 'production' : 'development'),
                'preventAssignment': true,
            }),
        ],
        external: [
            'react',
        ],
    },
    {
        input: 'src/main.tsx',
        output: [{
            file: 'dist/index.d.ts',
            format: 'es',
            plugins: [],
        }],
        plugins: [
            commonjs({
                exclude: 'src/**',
            }),
            svg(),
            babel({
                extensions: ['.js', '.ts', '.jsx', '.tsx'],
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
            }),
            typescript({tsconfig: './build.tsconfig.json'}),
            dts(),
            del({targets: ['dist/src'], hook: 'buildEnd'}),
        ],
    },
];

export default config;
