/**
 * generate absolute path using Node path package
 * note we are importing using the old way: common js, because inside webopack configuration file we cannot
 * use ecmaScript 6 modules
 */
const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     * entry-point: this file usually imports all other dependencies 
     * Webpack will start from this file running the build process
     */
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    // mode is for built in optimizations | production or development
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 7777
    },
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
            },
            {   
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        // each time we run the build script, Webpack will clean the output folder
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // remove all the files togerther with subfolders inside the build folder 
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            meta: {
                description: 'Hello World description'
            },
            title: 'Webpack Aleko',
            template: 'src/page-template.hbs'
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            meta: {
                description: 'Kiwi'
            },
            title: 'Webpack Aleko',
            template: 'src/page-template.hbs'
        }),
    ]
}