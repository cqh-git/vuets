<template>
    <div class="root">
        <el-button @click="goDetail">跳转</el-button>
    </div>
</template>
<script>
    import {getCurrentInstance} from 'vue'
    import {useRouter} from "vue-router";

    export default {
        name: "NY",
        setup(props, context) {
            console.log(props, context)
            const {push} = useRouter();
            const {ctx} = getCurrentInstance()
            // 全局混入
            console.log( ctx.$options)
            ctx.$options.methods.getAlert()

            function goDetail() {
                push({path: "/HN/NYDetail"});
                ctx.mittBus.$emit('emitThing', '我是传送事件')
            }

            return {goDetail};
        },
    };
</script>
<style scoped lang="scss">

</style>
