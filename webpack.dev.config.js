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
    entry: './src/index.js',
    output: {
        // output: can specify name of the file which will be generated as a result of the webpack build
        // and directory name
        // publicPath tells webpack where all the genereated files are located
        // filename: 'bundle.[contenthash].js', no need for cashing in dev mode
        path: path.resolve(__dirname, './dist'),
        // left empty for dynamic js filenames | contentHash
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
            title: 'Webpack Aleko',
            template: 'src/index.hbs',
            description: 'Some description'
        })
    ]
}