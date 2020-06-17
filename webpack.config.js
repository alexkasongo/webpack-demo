/**
 * generate absolute path using Node path package
 * note we are importing using the old way: common js, because inside webopack configuration file we cannot
 * use ecmaScript 6 modules
 */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    /**
     * entry-point: this file usually imports all other dependencies 
     * Webpack will start from this file running the build process
     */
    entry: './src/index.js',
    output: {
        // output: can specify name of the file which will be generated as a result of the webpack build
        // and directory name
        // publicPath tells webpack where all the genereated files are located
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    // to be defined
    mode: 'none',
    // tell webpack to import image
    module: {
        rules: [
            {   
                // check if file name contains either or
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {   
                // add css
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {   
                // add scss, Webpack loads style from right to left
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {   
                // add scss, babel transpiler
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        // terserPlugin is a minifier
        new TerserPlugin()
    ]
}