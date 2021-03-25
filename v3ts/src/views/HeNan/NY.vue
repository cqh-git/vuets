<template>
    <div class="root">
        <div style="width: 3200px;height: 10px;background-color: red;"></div>
        <el-button @click="goDetail">跳转</el-button>
        <p v-tooltip:[direction]="text">哈哈哈啊的发撒是水</p>
        <btn @click="clickThing">
            <template v-slot:btn1>
                888
            </template>
            <template v-slot:btn2>
                999
            </template>
            <template v-slot:btn3="scope">
                {{scope.text}}
            </template>
        </btn>
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
            const {push} = useRouter();
            const {ctx} = getCurrentInstance()
            // 全局混入
            console.log(ctx.$options)
            ctx.$options.methods.getAlert()

            function clickThing() {
                // alert(1)
            }

            function goDetail() {
                push({path: "/HN/NYDetail"});
                ctx.mittBus.$emit('emitThing', '我是传送事件')
            }

            return {goDetail, clickThing};
        },
    };
</script>
<style scoped lang="scss">
    .root {
        /*width: 130%;*/
    }

    p {
        margin: 300px auto;
        /*display: inline-block;*/
        height: 30px;
        width: 300px;
        background-color: chocolate;
    }
</style>
