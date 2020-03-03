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
		  contentBase: "dist"
	},
	// loader 配置
	module: {
		rules: [
			{
				test: /\.css$/, use: ["style-loader", "css-loader"]
			}
		]
	}
	
}