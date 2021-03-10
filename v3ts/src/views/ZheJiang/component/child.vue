<template>
    <div class="child">
        <p>我是child组件---$attrs:{{$attrs.val}}---provide:{{user.value}}</p>
        <button @click="clickThing">我是child组件的点击事件,能够发送给father组件和HZ组件</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        inheritAttrs: false,
        inject: ['user'],
        emits: ['todo'],
        setup(props, context) {
            const {emit} = context;
            const clickThing = () => {
                emit('todo', '我是child组件传送的')
            }
            return {clickThing}
        }

    }
</script>

<style scoped>

</style>
