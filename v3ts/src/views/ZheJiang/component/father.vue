<template>
    <div class="father">
        <p>我是a组件</p>
        <child v-bind="$attrs" @todo="todo"></child>
    </div>
</template>

<script>
    import child from './child.vue'
    import {toRef, ref} from 'vue';

    export default {
        name: "father",
        inheritAttrs: false,
        components: {child},
        props: {
            val: {
                type: String
            }
        },
        setup(props, context) {

            const {attrs, emit, slots} = context;
            const todo = (val) => {
                console.log('我是fateher', val)
            }
            return {todo}
        }
    }
</script>

<style scoped>

</style>
