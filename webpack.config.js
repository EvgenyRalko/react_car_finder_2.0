var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
    entry: './src/main.js',

    output: {
  		filename: 'index.js',
  		path: path.join(__dirname, 'dist')
    },

    devServer: {
		    port: 5555
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },

            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file',
                include: './misc/images'
            },

            {
                test: /\.(png|woff|woff2|eot|otf|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?limit=100000'
            }
        ]
	},
	plugins: [
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
