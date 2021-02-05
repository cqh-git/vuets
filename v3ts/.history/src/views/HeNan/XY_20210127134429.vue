<template>
  <div class="root">
    <el-button @click="changeRef" type="primary">点击改变Ref</el-button>
    {{ toRefObj }}
    <el-button @click="changeToRef" type="primary">点击改变toRef</el-button>
    {{ refObj }}
    <p>
      ref界面会更新,就像v-model一样,toRef界面不会更新,会影响原始数据,toRefs是toRef的集合，当然也不会更新,...toRefs能够直接读取对象中的key值
    </p>
  </div>
</template>
<script>
import { h, toRef, reactive, toRefs, ref } from "vue";
export default {
  name: "XY",
  setup() {
    let obj = { name: "alice", age: 12 };
    let toRefObj = toRef(obj, "name");
    let refObj = ref(obj.age);
    function change() {
      refObj.value = "我会变化";
    }
    function changeToRef() {
      toRefObj.value = "我变成toRefObj";
    }
    return { toRefObj, refObj, change ,changeToRef};
  },
};
</script>
<style scoped  lang="scss">
</style>