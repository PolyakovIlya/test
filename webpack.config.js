const path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader'],
                include: /flexboxgrid/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    }
};