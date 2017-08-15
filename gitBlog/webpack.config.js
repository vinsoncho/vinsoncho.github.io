const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require("marked");
const renderer = new marked.Renderer();
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: require('./webpack-config/entry.js'),
    output: {
        path: `${__dirname}/blog`,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: ['html-loader', 'markdown-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: require('./webpack-config/plugin.js')
}