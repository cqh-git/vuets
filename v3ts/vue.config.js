/*/vue.config.js*/
const webpack = require('webpack')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')

const appConfig = require('./config/app-config.ts')
module.exports = {
    publicPath: "./", //1.默认为 "/":部署在一个域名的根路径上  ; 2. "./":所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
    outputDir: "dist", //默认为 "dist",指打包后的资源放置的路径，放在dist文件夹下
    assetsDir: "static", //默认为:'' ,放置打包后生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    indexPath: "index.html", //Default: 'index.html' ,指定生成的 index.html 的输出路径 (相对于 outputDir)
    filenameHashing: true, //Default: true ,生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    // pages:undefined,//在 multi-page 模式下构建应用
    lintOnSave: true, //Type: boolean|'error';Default: true; true:将 lint 错误输出为编译警告;'error':错误输出会导致编译失败
    runtimeCompiler: true, //Default: false, 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
    // transpileDependencies:[],//Default: [], 默认情况下 babel-loader 会忽略所有 node_modules 中的文件
    productionSourceMap: false, //Default: true, 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    // crossorigin: undefined, //Default: undefined, 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    // integrity: false, //Default: false,在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity

    devServer: {
        open: process.platform === 'darwin',
        host: '10.96.9.68',
        port: 1100,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: 'http://10.96.9.68:1100',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
    },
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        // 是否开启 CSS source map？
        sourceMap: false,
        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {},
        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        // requireModuleExtension: false
    },
    pluginOptions: {},
    configureWebpack: {
        plugins: [
            // 生成仅包含颜色的替换样式（主题色等）
            new ThemeColorReplacer({
                fileName: 'style/theme-colors.[contenthash:8].css',
                matchColors: [
                    ...forElementUI.getElementUISeries(appConfig.themeColor)
                ],
                changeSelector: forElementUI.changeSelector,
                isJsUgly: process.env.NODE_ENV === 'production' ? true : undefined
            })
        ]
    }
}
