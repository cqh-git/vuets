<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="routerKey" />
      </transition>
    </router-view>
  </div>
</template>
<script>
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
<style scoped  lang="scss">
.main {
  width: 100%;
  height: calc(100% - 60px);
  /*background: #ebf5f8;*/
  p {
    color: red;
  }
}
</style>
