<template>
    <div id="app">
        <router-view name="sideBar"/>
        <router-view name="headBody"/>
        <router-view/>
    </div>
</template>
<script>
    export default {
        custom: "app custom",
        created() {
            console.log(this.$options.custom)
        }
    }
</script>

<style lang="scss">
    @import url("./style/common.scss");
    @import url("./style/sideBar.scss");
    @import url("./style/component.scss");
    @import url("./style/reset.scss");
    // @import url("./style/mixin.scss");
    /*弃用 >>> 和 /deep/*/
    //使用这种 ::v-deep(.bar) {}
    /*当前，从父节点传入的插槽内容同时受到父节点和子节点的样式影响。无法显式的创建以slot内容为目标的样式，或者不影响slot内容的样式，vue3.0中增加::v-slotted()*/
    /*::v-slotted(.foo) {}*/
</style>


