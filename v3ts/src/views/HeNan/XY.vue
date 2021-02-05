<template>
    <div class="root">
        <el-button @click="goDetail">跳转</el-button>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from "vue";
    import {useRoute, useRouter} from "vue-router";

    export default defineComponent({
        name: "XY",
        setup() {
            const {push} = useRouter();

            function goDetail() {
                push({path: '/HN/XYDetail'})
            }

            return {goDetail};
        },
    });
</script>
<style scoped lang="scss">
</style>
