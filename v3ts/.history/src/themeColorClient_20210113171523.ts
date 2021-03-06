import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
// 注意自己项目里的引入路径
// import appConfig from './app-config'
const appConfig = require('../config/app-config')

export let curColor = appConfig.themeColor

// 动态切换主题色
export function changeThemeColor(newColor: any) {
  const options = {
    // newColors: [...forElementUI.getElementUISeries(newColor), '#ff0000', '#ffff00']
    newColors: [...forElementUI.getElementUISeries(newColor), '#FC0101', '#000000']
  }
  return client.changer.changeColor(options, Promise)
    .then(() => {
      curColor = newColor
      localStorage.setItem('theme_color', curColor)
    })
}

export function initThemeColor() {
  const savedColor = localStorage.getItem('theme_color')
  if (savedColor) {
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}
