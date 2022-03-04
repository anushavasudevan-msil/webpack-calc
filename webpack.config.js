const path = require('path');
var webpack = require('webpack');

const srcDirectory = path.resolve(__dirname, "src");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssPlugin = require('extract-css-chunks-webpack-plugin')

module.exports = (env) => {
    const deMode = env.NODE_ENV;
    console.log(env.NODE_ENV)
    console.log(JSON.stringify(deMode))
    return {


        entry: path.join(srcDirectory, "index.js"),
        output: {
            path: path.resolve(__dirname, 'dist'),
            // filename: 'main.js',
            filename: 'main.js.[contenthash].js'
        },
        mode: env.NODE_ENV || 'production',
        plugins: [new HtmlWebpackPlugin({

            hash: true,
            title: 'Webpack Example App',
            header: 'Webpack Example Title',
            metaDesc: 'Webpack Example Description',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            templateParameters: {
                some_variable: deMode,
              },
        }),
        new CssPlugin({
            filename: 'style.css'
        }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [CssPlugin.loader, 'css-loader'],
                },
            ],
        },

    }

};