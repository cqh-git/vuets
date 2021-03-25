<template>
    <div class="headBody" :class="{'expandWidth':!sideFlag}">
        <head-top></head-top>
        <page-title></page-title>
        <main-body></main-body>
    </div>
</template>
<script>
    import mainBody from "./modules/mainBody";
    import pageTitle from "./modules/pageTitle";
    import headTop from "./modules/headTop";
    import {computed, watch} from 'vue';
    import {useStore} from "vuex";

    export default {
        name: "Home",
        components: {headTop, mainBody,pageTitle},

        setup(props, context) {
            const {getters} = useStore();
            const sideFlag = computed(() => getters.sideMenuStatus);
            return {sideFlag}
        }
    };
</script>
<style scoped lang="scss">
    .headBody {
        width: calc(100% - 64px);
        height: 100%;
        background: #ebf5f8;
        transition: 0.3s width ease-in-out;
    }

    .expandWidth {
        width: calc(100% - 200px);
    }
</style>
