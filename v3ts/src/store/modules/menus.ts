import axios from 'axios';
import {Module, GetterTree, ActionTree, MutationTree} from 'vuex';
import {setToken, setUuid, setSelectMenu, clearData} from '../../storage'
import {routes} from '../../router'

const NotFound = {path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/404',meta:{title:''}}

function changeMenus(data: any) {
    const newData = data.map((item: any) => {
        if (item.meta.type === 1) {
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

const menus: Module<any, any> = {
    state: {
        menus: [],
        selectMenu: null,
        currentPageDetail: {},
        sideMenuStatus: false
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
        },
        changeMenuStatus(state: any, flag: boolean) {
            state.sideMenuStatus = flag
        }
    },
    actions: {
        setStorage(state: object, data: any) {
            const {uuid, token} = data;
            setToken(data.token);
            setUuid(uuid);
            localStorage.setItem('selectMenu', '1000')
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
