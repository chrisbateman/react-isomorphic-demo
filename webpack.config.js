'use strict';

// path.sep needed for windows compatibility, rather than just '/'
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + path.sep,
    entry: './src/browser',
    output: {
        path: __dirname + path.sep + 'dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};