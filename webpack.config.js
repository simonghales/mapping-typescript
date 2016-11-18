var webpack = require("webpack");
var path = require("path");
var TypedocWebpackPlugin = require("typedoc-webpack-plugin");

module.exports = {
    devtool: "eval",
    entry: [
        "./src/app.tsx"
    ],
    output: {
        filename: "bundle.js",
        publicPath: "/assets/",
        path: path.resolve("build/dist/")
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
        modulesDirectories: ["node_modules"],
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ["babel", "ts-loader"] }
        ]
    },
    plugins: [
        new TypedocWebpackPlugin(Object.assign(
            require('./tsconfig.json').compilerOptions,
            require('./typedoc.json')))
    ]
};