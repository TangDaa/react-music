
var htmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {

    entry: './app/index.js',

    output:{

         path:path.resolve(__dirname,'./dist/js'),

         filename:'bundle.js'

		},
		module: {
            rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader:"babel-loader",
			},
			{
				test: /\.css$/,
				loader: "style!css",
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
			]
		}
	}