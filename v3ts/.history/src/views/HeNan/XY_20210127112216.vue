<template>
  <div class="root">
    <!-- <Comp></Comp> -->
    <el-button @click="change" type="primary">点击</el-button>
    {{ toRefObj }}
    {{ name }}
    {{ refObj }}
    {{ toRefObjs }}
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
    let refObj = ref(obj.name);
    let state = reactive({
      name: "张三",
      age: "12",
    });
    let toRefObjs = toRef(state, "name");
    function change() {
      refObj.value = "我变成refObj";
      toRefObj.value = "我变成toRefObj";
    //   toRefObjs.value = "我变成toRefObjs";
    }
    return { toRefObj, change, ...toRefs(state), refObj, toRefObjs };
  },
};
</script>
<style scoped  lang="scss">
</style>