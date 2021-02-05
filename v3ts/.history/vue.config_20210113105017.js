const webpack = require('webpack')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
// 注意自己项目里的引入路径
const appConfig = require('./src/app-config')


module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 生成仅包含颜色的替换样式（主题色等）
      new ThemeColorReplacer({
        fileName: 'style/theme-colors.[contenthash:8].css',
        matchColors: [
          ...forElementUI.getElementUISeries(appConfig.themeColor), // element-ui主色系列
          '#0cdd3a', // 自定义颜色
          '#c655dd'
        ],
        changeSelector: forElementUI.changeSelector,
        isJsUgly: process.env.NODE_ENV === 'production' ? true : undefined
      })
    ]
  }
}