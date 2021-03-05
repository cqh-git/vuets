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
    },
    'myInput': {
        props: {
            firstName: String
        },
        emits: ['update:firstName'],
        template: `<input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)">`
    },
    "myComponent": {
        props: {
            modelValue: String,//官方api
            modelModifiers: {//官方api
                default: () => ({})
            }
        },
        emits: ['update:modelValue'],
        created() {
            console.log((this as any).modelModifiers) // { capitalize: true }
            console.log((this as any).modelValue)
        },
        methods: {
            emitValue(e: any) {
                let value = e.target.value
                if ((this as any).modelModifiers.capitalize) {
                    value = value.charAt(0).toUpperCase() + value.slice(1)
                }
                (this as any).$emit('update:modelValue', value)
            }
        },
        template: `<input type="text" :value="modelValue" @input="emitValue">`
    },
    "myComponents": {
        props: ['description', 'descriptionModifiers'],
        // 对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"
        emits: ['update:description'],
        template: `<input type="text" :value="description" @input="$emit('update:description', $event.target.value)">`,
        created() {
            console.log('description', (this as any).description)
            console.log('descriptionModifiers', (this as any).descriptionModifiers) // { capitalize: true }
        }
    },
    'hz': {
        render() {
            console.log((this as any).$slots)
            return h('div', {style: {color: 'red'}}, {
                default: () => {
                    return (this as any).$slots.default({
                        text: '嗯哼'
                    })
                },
                footer: () => {
                    return (this as any).$slots.footer({
                        text: '我想要出现'
                    })
                },//footer无法实现
            })
        },
        // render() {
        //     console.log((this as any).$slots)
        //     return h('div', {style: {color: 'red'}}, {
        //         default: () => [(this as any).$slots.default({text: '嗯哼'}), (this as any).$slots.footer({text: '我想要出现'})],
        //     })
        // },
        // render() {
        //     return h('div', {style: {color: 'red'}}, [
        //         (this as any).$slots.default({text: '嗯哼'}),
        //         (this as any).$slots.footer({text: '我是脚步'})
        //     ])
        // },
        // render() {
        //     return h('div', {style: {color: 'red'}}, (this as any).$slots.footer({text: '我想要出现'}))
        // }
        // render() {
        //     return h('div', {style: {color: 'red'}}, [
        //         h('p', {innerHTML: '111'}),
        //         h('p', {innerHTML: '222'}),
        //     ])
        // }
    }
}
