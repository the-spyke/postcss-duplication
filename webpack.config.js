"use strict";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postCssImport = require("postcss-import");
const postCssPresetEnv = require("postcss-preset-env");
const postCssReporter = require("postcss-reporter");

module.exports = {
    devtool: "source-map",
    entry: {
        test: "./index.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            minimize: false,
                            modules: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                postCssImport(),
                                postCssPresetEnv(),
                                postCssReporter()
                            ],
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new MiniCssExtractPlugin()
        ]
    }
}
