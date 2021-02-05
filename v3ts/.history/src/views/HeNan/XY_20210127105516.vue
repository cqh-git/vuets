<template>
  <div class="root">
    <Comp></Comp>
    <button @click="change">点击</button>
    {{ newObj }}
    {{ name }}
    <p>
      ref界面会更新,就像v-model一样,toRef界面不会更新,会影响原始数据,toRefs是toRef的集合，当然也不会更新,...toRefs能够直接读取对象中的key值
    </p>
	{{refValue}}
  </div>
</template>
<script>
import { h, toRef, reactive, toRefs } from "vue";
export default {
  name: "XY",
  setup() {
    let obj = { name: "alice", age: 12 };
    let newObj = toRef(obj, "name");
    let state = reactive({
      name: "张三",
      age: "111",
	});
	let refValue=ref(state.name)
    function change() {
      newObj.value = "Tom";
      console.log(obj, newObj);
    }
    console.log(toRefs(state));
    function Comp(props, { slots, attrs }) {
      return h("div", { id: "root" }, [
        h("span", { class: "label" }, "你好"),
        h("span", { class: "label" }, "明天"),
      ]);
    }
    return { Comp, newObj, change, ...toRefs(state),refValue };
  },
};
</script>
<style scoped  lang="scss">
</style>