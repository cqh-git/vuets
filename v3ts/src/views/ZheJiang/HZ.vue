<template>
    <div class="root parent">
        <p>
            我是HZ组件---{{obj.receive}}---姓名:{{obj.name}}---年龄:{{obj.age}}
        </p>
        <father :val="obj.attrs" @todo="todo"></father>
        <div class="btnBox">
            <button @click="obj.attrs='我不猜'">通过attrs更改</button>
            ----
            <button @click="obj.provide='jone'">通过provide更改</button>
        </div>
    </div>
</template>
<script lang="ts">
    import father from './component/father.vue'
    import {reactive, toRef, computed,defineComponent} from 'vue';

    export default defineComponent({
        name: 'Home',
        inheritAttrs: false,
        components: {father},
        provide(): object {
            return {
                user: computed(() => this.obj.provide)
            }
        },
        setup() {
            const obj = reactive({
                name: '小黑',
                age: 12,
                attrs: '你猜我是谁',
                provide: 'tom',
                receive: '默认参数'
            });
            setTimeout(() => obj.age++, 5000)
            const num = toRef(obj, 'age');
            num.value++;
            obj.age++;
            console.log(obj.age)//14
            const todo = (val: string): void => {
                obj.receive = val
            }
            return {
                todo, obj
            }
        }

    })
</script>
<style scoped>
    .btnBox {
        margin-top: 20px;
    }
</style>
