import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
// 注意自己项目里的引入路径
// import appConfig from './app-config'
const appConfig = require('../../config/app-config')

export let curColor = appConfig.themeColor

// 动态切换主题色
export function changeThemeColor(newColor: any) {

  console.log(newColor)
  const options = {
    // newColors: [...forElementUI.getElementUISeries(newColor), '#ff0000', '#ffff00']
    newColors: [...forElementUI.getElementUISeries(newColor), '#7fffd4', '#efefef'],

  }
  return client.changer.changeColor(options, Promise)
    .then(() => {
      curColor = newColor
      console.log(curColor)
      console.log(appConfig)
      localStorage.setItem('theme_color', curColor)
    })
}

export function initThemeColor() {
  const savedColor = localStorage.getItem('theme_color')
  if (savedColor) {
    console.log(savedColor)
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}
