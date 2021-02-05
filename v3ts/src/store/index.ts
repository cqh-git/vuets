import {createStore, Store} from 'vuex'
import menus from './modules/menus'
import {GetterTree} from 'vuex'
import {getSelectMenu} from '../storage'


export default createStore({
    modules: {
        menus
    },
    getters: {
        menus: (state: any) => state.menus.menus.filter((v: any) => v.name !== "NotFound"),
        getSelectMenu: (state: any) => state.menus.selectMenu || getSelectMenu()
    }
})
