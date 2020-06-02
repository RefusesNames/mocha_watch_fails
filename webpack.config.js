const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


module.exports = {
	entry: "./assets/ts/logic.ts",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
		publicPath: '/public'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'assets/html/index.html'),
			filename: path.resolve(__dirname, 'public/index.html'),
			showErrors: true,
			inject: false
		}),
		new webpack.ProgressPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.jsx?$/],
				use: 'ts-loader',
			},
		]
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	devServer: {
		port: 9000,
		contentBase: path.resolve(__dirname, 'public')
	}
};
