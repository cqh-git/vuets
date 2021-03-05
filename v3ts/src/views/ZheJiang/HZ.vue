<template>
    <div class="root parent">
        {{data.name}}
        {{data.age}}
        <p>我是HZ组件</p>
        <father :val="data.dataValue" @todo="todo"></father>
    </div>
</template>
<script>
    import father from './component/father'
    import {reactive, toRef} from 'vue';

    export default {
        name: 'Home',
        inheritAttrs: false,
        components: {father},
        setup(props, context) {
            const data = reactive({
                name: '小黑',
                age: 12,
                dataValue: '你猜我是谁'
            });
            setTimeout(() => {
                data.age++
            }, 5000)
            const num = toRef(data, 'age');
            num.value++;
            console.log(num.value)
            data.age++
            console.log(data.age)
            const todo = (val) => {
                console.log('我是HZ组件', val)
            }
            return {
                todo, data
            }
        }

    }
</script>
