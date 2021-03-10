<template>
    <div class="root">
        <el-button @click="goDetail">跳转</el-button>
        <p v-tooltip:[direction]="text">哈哈哈啊的发撒是水</p>
    </div>
</template>
<script>
    import {getCurrentInstance} from 'vue'
    import {useRouter} from "vue-router";

    export default {
        name: "NY",
        data() {
            return {
                direction: 'top',
                text: '哈哈哈啊的发撒是水水水水水水水水飒犬瘟热呃呃呃呃呃呃飒奥迪是否石帆胜法师打啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊丰石帆胜丰石帆胜丰沙发上飒飒东风'
            }
        },
        setup(props, context) {
            console.log(props, context)
            const {push} = useRouter();
            const {ctx} = getCurrentInstance()
            // 全局混入
            console.log(ctx.$options)
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
    p {
        margin: 300px auto;
        /*display: inline-block;*/
        height: 30px;
        width: 300px;
        background-color: chocolate;
    }
</style>
