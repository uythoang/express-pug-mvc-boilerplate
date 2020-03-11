const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
    NODE_ENV = "production",
} = process.env;

module.exports = {
    entry: "./src/app.ts",
    mode: NODE_ENV,
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: "pug-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/sample.pug",
        }),
    ],
    externals: [nodeExternals()],
    node: {
        __dirname: true,
    },
};
