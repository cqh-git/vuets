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
        },
            app.config.globalProperties.$countDown = (time: string) => {
                const nowTime = new Date(), endTime = new Date(time);
                const leftTime = endTime.getTime() - nowTime.getTime();
                const surplusDay = Math.floor(leftTime / (1000 * 60 * 60 * 24));
                const surplusHour = Math.floor(leftTime / (1000 * 60 * 60) % 24);
                const surplusMinute = Math.floor(leftTime / (1000 * 60) % 60);
                const surplusSecond = Math.floor(leftTime / 1000 % 60);
                return surplusDay + '天' + surplusHour + '时' + surplusMinute + '分' + surplusSecond + '秒'
            }


    }
}
