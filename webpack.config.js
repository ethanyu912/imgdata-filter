const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workingPath = process.cwd();

const babelLoader = {
    loader: 'babel-loader',
    options: {
        babelrc: false,
        configFile: false,
        presets: [
            [require('@babel/preset-env'), {
                modules: false
            }]],
        plugins: [
            require('@babel/plugin-transform-runtime')],
        cacheDirectory: true
    }
};

const tpl = path.resolve(path.resolve(workingPath), './src/test/index.html');

const htmlPlugin = new HtmlWebpackPlugin({
    filename: `index.html`,
    template: tpl,
    compile: false,
    showErrors: true,
    cache: true
});

const webpackConf = {
    entry: path.resolve(workingPath, 'src/test/index.js'),
    output: {
        path: path.resolve(workingPath, 'src/test'),
        filename: 'bundle.js'
    },
    mode: 'development',
    watch: true,
    target: 'web',
    context: workingPath,
    node: {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        fs: 'empty',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty' // eslint-disable-line
    },
    module: {
        strictExportPresence: false,
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [
                    path.resolve(workingPath, 'src')
                ],
                use: [
                    babelLoader,
                    'ts-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src/test'),
        host: '0.0.0.0',
        hot: true,
        port: 8080,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        disableHostCheck: true
    },
    resolve: {
        modules: [
            path.resolve(workingPath, 'node_modules'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css'],
    },
    // plugins: [htmlPlugin]
};

module.exports = webpackConf;