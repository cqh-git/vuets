import router from '../router/index';
import store from '../store'
export default {
    install: (app: any) => {
        app.config.globalProperties.$push = (url: any) => {
            const menus = store.getters.menus;
            const urlArr = url.split('/').filter(Boolean).map((item: any) => '/' + item);
            menus.forEach((item: any) => {
                if (item.path === urlArr[0]) {
                    if (item.children && item.children.length) {
                        item.children.forEach((son: any) => {
                            if (urlArr[1].includes(son.path)) {
                                store.commit('setSelectMenu', son.id)
                            }
                        })
                    }
                }
            })

            router.push(url)
        }
    }
}
