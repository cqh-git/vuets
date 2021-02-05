<template>
  <div id="app">
    <router-view name="sideBar" :key="routerKey" />
    <router-view name="headBody" :key="routerKey" />
    <router-view :key="routerKey" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
export default defineComponent {
  name: "App",
  setup() {
    const routerKey = computed(() => {
      return useRoute().path;
    });
    return {
      routerKey,
    };
  }
};
</script>
<style  lang="scss">
@import url("./style/common.scss");
@import url("./style/sideBar.scss");
// @import url("./style/mixin.scss");
</style>
