<template>
    <div class="father">
        <p>我是father组件---{{data}}---$attrs:{{$attrs.val}}---provide:{{user.value}}</p>
        <child v-bind="$attrs" @todo="todo"></child>
    </div>
</template>

<script>
    import child from './child.vue'
    import {toRef, ref} from 'vue';

    export default {
        name: "father",
        inheritAttrs: false,
        inject: ['user'],
        components: {child},
        setup(props, context) {
            const data = ref('默认参数')
            const todo = (val) => {
                data.value = val
            }
            return {todo, data}
        }
    }
</script>

<style scoped>

</style>
