var path = require('path');
const srcFldrPath = path.join(__dirname, 'src');
const distJsFldrPath = path.join(__dirname, 'dist/js');

module.exports = {
    entry: './src/index.js',
    output: {
        path: distJsFldrPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};