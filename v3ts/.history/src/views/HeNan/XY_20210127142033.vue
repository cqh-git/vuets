<template>
  <div class="root">
    <!-- <div>
      <el-button @click="changeRef" type="success">点击改变Ref</el-button> -->
    <!-- {{ refObj }} -->
    <!-- </div> -->
    <div>
      <el-button @click="changeToRef" type="primary">点击改变toRef</el-button>
      {{ toRefObj }}
    </div>

    <p>
      ref界面会更新,就像v-model一样,toRef界面不会更新,会影响原始数据,toRefs是toRef的集合，当然也不会更新,...toRefs能够直接读取对象中的key值
    </p>
  </div>
</template>
<script>
import { h, toRef, reactive, toRefs } from "vue";
export default {
  name: "XY",
  setup() {
    let obj1 = reactive({ name: "你改变不了我", age: 12 });
    let toRefObj = toRef(obj1, "name");

    // function changeRef() {
    //   refObj.value = "我已经被改变了";
    // }
    function changeToRef() {
      toRefObj.value = "糟糕,我出来了";
    }
    return { toRefObj, changeRef, changeToRef };
  },
};
</script>
<style scoped  lang="scss">
</style>