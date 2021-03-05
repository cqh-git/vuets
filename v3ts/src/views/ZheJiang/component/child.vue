<template>
    <div class="child">
        <p>我是b组件</p>
        <p>{{$attrs.val}}</p>
        <button @click="clickThing">点击事件</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        inheritAttrs: false,
        emits: ['todo'],
        setup(props, context) {
            const {attrs, emit, slots} = context;
            const clickThing = () => {
                emit('todo', 123)
            }
            return {clickThing}
        }

    }
</script>

<style scoped>

</style>
