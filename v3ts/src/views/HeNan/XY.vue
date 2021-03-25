<template>
    <div class="root">
        <el-button @click="goDetail">跳转</el-button>
        <el-button @click="showModalFunc">打开弹框</el-button>
        <test-component @click="$emit('bbb')" :bb="999999"></test-component>
    </div>
</template>
<script lang="ts">
    import {defineComponent, h} from "vue";
    import {useRoute, useRouter} from "vue-router";
    import {openModal} from "./openModal";

    export default defineComponent({
        name: "XY",
        props: {
            name: {
                type: String
            }
        },
        components: {
            'testComponent': {
                render() {
                    return h('p', {
                        name: 12,
                        // onClick: () => {
                        //     this.aaa()
                        // }
                    }, this.bb)
                },
                props: {
                    bb: {
                        type: Number,
                        default: () => {
                            return 123
                        }
                    }
                },
                methods: {
                    aaa() {
                        alert(123)
                    }
                }
            }
        },

        emits: ['bbb'],
        methods: {
            bbb() {
                alert(2222222)
            }
        },
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
            return {goDetail, showModalFunc};
        },
    });
</script>
<style scoped lang="scss">
</style>
