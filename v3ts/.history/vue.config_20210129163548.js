const BASE_URL = './'
 
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const configColor = require('./src/config/themeColor.js')
 
module.exports = {
	publicPath: process.env.NODE_ENV == "production" ? BASE_URL : "/",
	outputDir: 'project',
	// 打包时不生成.map文件
	productionSourceMap: false,
	//   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
	lintOnSave: false,
	chainWebpack: config => {
		// 自定义换肤
		config.plugin('webpack-theme-color-replacer')
			.use(ThemeColorReplacer)
			.tap(options => {
				options[0] = {
					fileName: 'css/theme-colors-[contenthash:8].css',
					matchColors: [...forElementUI.getElementUISeries(configColor.themeColor), '#7fffd4', //自定义颜色
					'#efefef',],
					changeSelector: forElementUI.changeSelector,
					isJsUgly: process.env.NODE_ENV !== 'development'
				}
				return options
			})
	},
	devServer: {
		port: 8081,
 
	}
}