const path = require("path");

module.exports = {
	entry: "./src/main.js",
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/"
	},
	// 本地服务器
	devServer: {
		  contentBase: "dist",
		  overlay: true
	},
	// loader 配置
	module: {
		rules: [
			// css loader
			{
				test: /\.css$/, 
				use: ["style-loader", "css-loader"]
			},
			//html loader
			{
				test: /\.html$/, 
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].html"
						}
					},
					{
						loader: "extract-loader"
					},
					{
						loader: "html-loader",
						options: {
							attrs: ["img:src"]
						}
					}
				]
			},
			// image loader
			{
				test: /\.(jpeg|png|gif|jpg|tif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]"
						}
					}
				]
			},
			// js loader
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			}
		]
	}
	
}