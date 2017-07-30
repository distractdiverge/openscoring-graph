const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || '8888';
const HOST = process.env.HOST || '127.0.0.1';

const extractSass = new ExtractTextPlugin({
    filename: 'style.css'
});

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/template.html',
    files: {
        css: ['style.css'],
        js: ['bundle.js']
    }
});


module.exports = {
    target: 'web',
    entry: './src/index.js',
    devtool: process.env.WEBPACK_DEV_TOOL || 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:  [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                use: extractSass.extract({
                    use:  [{
                        loader: 'css-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
    },
    devServer: {
        contentBase: './dist',
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        extractSass,
        htmlPlugin
    ]
};
