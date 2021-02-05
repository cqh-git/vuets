import axios from 'axios';
import { setToken, setUuid, setSelectMenu, clearData } from '../../storage'
const NotFound = { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/404' }
function changeMenus(data: any) {
  const newData = data.map((item: any) => {
    if (item.type === 1) {
      item.components = {
        headBody: () => import(`@/views/layout/headBody.vue`),
        sideBar: () => import(`@/views/layout/sideBar.vue`),
      }
    } else {
      item.component = () => import(`@/views/lglayout/headBody.vue`)
    }
    if (item.children && item.children.length) {
      item.children.forEach((son: any) => {
        son.component = () => import(`@/views/${son.comAdd}.vue`)
      });
    }
    return item
  })
  return newData
}
const menus = {
  state: {
    menus: [],
    selectMenu: null,
  },
  mutations: {
    clearStorage() {
      clearData();
      window.location.reload()
    },
    setSelectMenu(state: any, data: any) {
      state.selectMenu = data
      setSelectMenu(data)
    },
    pushs(state: any, data: any) {
      state.menus = data
    }
  },
  actions: {
    setStorage(state: object, data: any) {
      const { uuid, token } = data
      setToken(data.token)
      setUuid(uuid)
    },
    async getMenus(context: any) {
      const res = await axios.get('/menu/data');
      try {
        if (res.status === 200) {
          const menus = changeMenus(res.data);
          menus.push(NotFound);
          context.commit('pushs', menus);
          return Promise.resolve(menus);
        } else {
          return Promise.reject(res)
        }
      } catch {
        return Promise.reject([])
      }
    }
  }
}
export default menus