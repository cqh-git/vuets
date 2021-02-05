<template>
  <div class="root">
    <Comp></Comp>
  </div>
</template>
<script>
import {h} from 'vue';
export default {
  name: "XY",
  setup() {
    function Comp(props, { slots, attrs }) {
      return h("div", { id: "root" }, ["this is content"]);
    }
    return { Comp };
  },
};
</script>
<style scoped  lang="scss">
</style>