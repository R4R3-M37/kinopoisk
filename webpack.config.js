const path = require('path')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = 'development'
let target = 'web'

if (process.env.NODE_ENV === 'production') {
	mode = 'production'
	target = 'browserslist'
}

const plugins = [
	new HtmlWebpackPlugin({
		template: './public/index.html',
		favicon: './public/favicon.ico',
		inject: 'head'
	}),
	new ReactRefreshWebpackPlugin()
]

module.exports = {
	mode,
	plugins,
	target,
	entry: './src/index.tsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true
	},
	devtool: 'source-map',
	devServer: {
		hot: true,
		port: 3000,
		open: true,
		historyApiFallback: true
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src/')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{ test: /\.html$/, use: ['html-loader'] },
			{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			}
		]
	}
}
