<template>
  <div class="root">
    <Comp></Comp>
    <button @click="clickDetail">点击</button>
  </div>
</template>
<script>
import { h } from "vue";
export default {
  name: "XY",
  setup() {
    function clickDetail() {
		
	}
    function Comp(props, { slots, attrs }) {
      return h("div", { id: "root" }, [
        h("span", { class: "label" }, "你好"),
        h("span", { class: "label" }, "明天"),
      ]);
    }
    return { Comp };
  },
};
</script>
<style scoped  lang="scss">
</style>