/**
 * generate absolute path using Node path package
 * note we are importing using the old way: common js, because inside webopack configuration file we cannot
 * use ecmaScript 6 modules
 */
const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        // output: can specify name of the file which will be generated as a result of the webpack build
        // and directory name
        // publicPath tells webpack where all the genereated files are located
        // [name] webpack takes name from entry configuration
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        // left empty for dynamic js filenames | contentHash
        publicPath: ''
    },
    // mode is for built in optimizations | production or development
    mode: 'production',
    optimization: {
      splitChunks: {
          chunks: 'all'
      }  
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {   
                // add scss, Webpack loads style from right to left
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        // terserPlugin is a minifier included in production mode by default
        // [name] custom name for each css file
        // new TerserPlugin(),        
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // each time we run the build script, Webpack will clean the output folder
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // remove all the files togerther with subfolders inside the build folder 
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        // chunk names are specified in entry point
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world', 'vendors~hello-world~kiwi'],
            meta: {
                description: 'Hello World description'
            },
            title: 'Webpack Aleko',
            template: 'src/page-template.hbs'
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            chunks: ['kiwi', 'vendors~hello-world~kiwi'],
            meta: {
                description: 'kiwi baby'
            },
            title: 'Kiwi',
            template: 'src/page-template.hbs'
        })
    ]
}