import {h, createApp} from 'vue';
import BulletFrame from './BulletFrame.vue';

const addText = (options: any) => {
    let {name, age, showText} = options;
    const div = document.createElement('div')
    div.setAttribute('class', 'divBox')
    document.getElementById('textBox')!.appendChild(div)
    const destory = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(BulletFrame,
                {
                    name,//通过props传参数name
                    showText,//Boolen值,判断是否显示隐藏
                    class: 'myClass',//添加类名
                    title: '我是title提示',//添加title提示
                    onClick: ($event: any) => console.log('clicked', $event.target),//添加点击事件
                    'onHh': (val: boolean) => {//监听事件，子组件通过emit,在此户监听
                        if (val == false) destory();
                    }
                }, {
                    age: () => age,//v-slot:age的插槽
                    sex: (prop: any) => this.sex//v-slot:sex的插槽
                })
        },
        props: {
            sex: {
                type: String,
                required: true,
                default: '我是默认的boy'
            }
        }
    }, {userName: '黎明'})

    app.mount(div)
}
export {addText}
