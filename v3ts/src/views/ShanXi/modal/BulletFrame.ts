import {h, createApp} from 'vue';
import BulletFrame from './BulletFrame.vue';

const openModal = (options: any) => {
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
                    name,
                    showText,
                    class: 'myClass',
                    title: '我是title提示',
                    onClick: ($event: any) => console.log('clicked', $event.target),
                    'onHh': (val: boolean) => {
                        if (val == false) destory();
                    }
                }, {
                    age: () => age,
                    sex: (prop: any) => this.level
                })
        },
        props: {
            level: {
                type: String,
                required: true,
                default: '我是默认'
            }
        }
    },{userName:'黎明'})

    app.mount(div)
}
export {openModal}
