<template>
    <div class="root">
        <el-button @click="goDetail">跳转</el-button>
        <el-button @click="showModalFunc">打开弹框</el-button>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from "vue";
    import {useRoute, useRouter} from "vue-router";
    import {openModal} from "./openModal";
    export default defineComponent({
        name: "XY",
        setup() {
            const {push} = useRouter();

            function goDetail() {
                push({path: '/HN/XYDetail'})
            }
            const showModalFunc = () => {
                const visible = true
                const vm = openModal({
                    visible,
                    title: '标题(slot)',
                    content: '对话框内容(slot)',
                    ok: () => {
                        console.log('ok');
                        return false
                    },
                    cancel: () => {
                        console.log('取消');
                    }
                })

            }
            return {goDetail,showModalFunc};
        },
    });
</script>
<style scoped lang="scss">
</style>
