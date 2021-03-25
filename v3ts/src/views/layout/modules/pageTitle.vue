<template>
    <div class="pageTitle">
        <div class="subTitle">
            <p class="title"><span></span><span>{{metaDetail.title}}</span></p>
            <div v-if="metaDetail.level===3">
                <el-button size="small" @click="backPage">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, computed, getCurrentInstance, watch, ref} from 'vue'
    import {useRoute} from 'vue-router'

    export default defineComponent({
        name: "pageTitle",
        setup(props, context) {
            const route = useRoute();
            const {ctx}: any = getCurrentInstance()
            const allRoutes = ctx.$router.getRoutes();
            const routerKey = computed(() => route.path);
            const metaDetail = ref(null);

            function getRouteDetail(n: any) {
                return allRoutes.filter((item: any) => item.path === n)[0]
            }

            function backPage() {
                ctx.$router.go(-1)
            }

            watch(routerKey, (n, b) => {
                metaDetail.value = getRouteDetail(n).meta
            }, {immediate: true})
            return {metaDetail, backPage}

        }
    })
</script>

<style scoped>
    .pageTitle {
        width: 100%;
        height: 40px;
    }

    .subTitle {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .title span:first-child {
        width: 5px;
        height: 18px;
        background-color: #409EFF;
        display: inline-block;
        border-radius: 8px;
        margin-right: 5px;
        vertical-align: middle;
    }

    .title span:last-child {
        font-size: 18px;
        font-weight: bolder;
        color: black;
        display: inline-block;
        vertical-align: middle;

    }
</style>
