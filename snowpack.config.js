module.exports = {
    extends: '@snowpack/app-scripts-react',
    plugins: ['@snowpack/plugin-dotenv', '@snowpack/plugin-babel'],
    installOptions: {
        rollup: {
            plugins: [require('rollup-plugin-node-polyfills')()],
        },
    },
}
