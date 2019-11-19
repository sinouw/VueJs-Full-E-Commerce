const path = require('path');
module.exports = {
	publicPath: process.env.NODE_ENV == 'production' ? '/' : '/',
	configureWebpack: {
		resolve: {
			alias: {
				Components: path.resolve(__dirname, 'src/components/'),
				Constants: path.resolve(__dirname, 'src/constants'),
				Assets: path.resolve(__dirname, 'src/assets'),
				Container: path.resolve(__dirname, 'src/container'),
				Views: path.resolve(__dirname, 'src/views')
			},
			extensions: ['*', '.js', '.vue', '.json']
		}
	}
}