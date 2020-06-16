module.exports = {
    /**
     * entry-point: this file usually imports all other dependencies 
     * Webpack will start from this file running the build process
     */
    entry: './src/index.js',
    output: {
        // output: can specify name of the file which will be generated as a result of the webpack build
        // and directory name
        filename: 'bundle.js',
        path: './dist'
    },
    // to be defined
    mode: 'none'
}