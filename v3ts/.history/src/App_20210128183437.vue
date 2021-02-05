<template>
  <div id="app">
    <router-view name="sideBar"  />
    <router-view name="headBody" />
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const routerKey = computed(() => {
      return useRoute().path;
    });
    return {
      routerKey,
    };
  },
};
</script>
<style  lang="scss">
@import url("./style/common.scss");
@import url("./style/sideBar.scss");
// @import url("./style/mixin.scss");
</style>
