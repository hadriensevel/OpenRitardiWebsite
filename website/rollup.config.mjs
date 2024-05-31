import terser from '@rollup/plugin-terser';

export default [
    {
        input: [
            'src/js/statistics.js'
        ],
        output: {
            dir: 'dist/js',
            format: 'es',
            sourcemap: true
        },
        plugins: [terser({format: {comments: false}})]
    }
]