<template>
  <div class="root">
    <Comp></Comp>
    <button @click="change">点击</button>
    {{ newObj }}
  </div>
</template>
<script>
import { h, toRef } from "vue";
export default {
  name: "XY",
  setup() {
    let obj = { name: "alice", age: 12 };
    let newObj = toRef(obj, "name");
    function change() {
      newObj.value = "Tom";
      console.log(obj, newObj);
    }
    function Comp(props, { slots, attrs }) {
      return h("div", { id: "root" }, [
        h("span", { class: "label" }, "你好"),
        h("span", { class: "label" }, "明天"),
      ]);
    }
    return { Comp, newObj };
  },
};
</script>
<style scoped  lang="scss">
</style>