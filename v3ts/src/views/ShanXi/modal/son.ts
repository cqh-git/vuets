import {createApp, h} from "vue";
import son from './son.vue'

const createTemplate = (options: any) => {
    let {name, age} = options;
    const fatherBox = document.getElementById('fatherBox');
    const app = createApp({
        render() {
            return h(son, {name}, {age: () => age})
        }
    })
    app.mount(fatherBox!)
}
export {createTemplate}
