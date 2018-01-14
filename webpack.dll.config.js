var fs = require('fs');
var path = require("path");
var webpack = require("webpack");

var vendors = [
    'react',
    'react-dom',
    'styled-components'
];

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dll.js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "manifest.json"),
            name: "[name]_[hash]",
            context: __dirname
        })
    ]
};