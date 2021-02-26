import {h, resolveComponent, VNode, createApp} from 'vue';
import {resolveAny} from "dns";

export default {
    'tag': {
        props: {
            params: {
                type: Object,
                default: () => {
                    return {color: 'black', innerHTML: 'tag标签'}
                }
            }
        },
        template: `
            <div class="tag" :style="{color:params.color}">{{params.innerHTML}}</div>`
    },
    'iconTitle': {
        props: {
            title: {
                type: String,
                required: true,
                default: '我是默认的',
            }
        },
        render() {
            //采用类型断言，this as any,不然this.level报错
            return h('div', {class: 'iconTitle'}, [
                h('p', {}, (this as any).title),
                h('p', {}, (this as any).$slots.Subtitle({
                    hello: '欢迎你'
                })),
                h('p', {}, (this as any).$slots.default()),
                h('p', {}, '空荡荡的'),
                h('p', {innerHTML: "嗯哼"}),
                // h('p', {}, {son1: () => 'son1'}),//v-slot:son1
                // h('p', {}, {son2: () => 'son2'})//v-slot:son2
            ])
        },
    }
}
