<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Home",
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
.main {
  width: 100%;
  height: calc(100% - 60px);
  margin-top: 60px;
  background: white;
  border: 8px solid lightgrey;
  box-sizing: border-box;
}
</style>