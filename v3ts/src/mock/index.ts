import Mock from 'mockjs'
import {getUserInfo, menus} from './response/user'
import {account} from './response/account'
import menu from './response/menu'

const data = Mock.mock(/\/getUser\/info/, 'get', getUserInfo)
const datas = Mock.mock(/\/life\/sort/, 'get', menus)
const menuArr = Mock.mock(/\/menu\/data/, 'get', menu)
const verification = Mock.mock(/\/account\/verification/, 'post', account)

Mock.setup({
    timeout: '200-600'
})
export {data, datas, menuArr, verification}
