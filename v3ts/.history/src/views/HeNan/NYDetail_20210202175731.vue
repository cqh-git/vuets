<template>
  <div class="root">
    <div>
      <el-button @click="changeRef" type="success">点击改变Ref</el-button>
      {{ refObj }}
    </div>
    <div>
      <el-button @click="changeToRef" type="primary">点击改变toRef</el-button>
      {{ toRefObj }}
    </div>

    <p>
      ref界面会更新,就像v-model一样,toRef界面不会更新,会影响原始数据,toRefs是toRef的集合，当然也不会更新,...toRefs能够直接读取对象中的key值
    </p>
    <!--        <input type="text" v-focus/>-->
    <el-input type="text" class="inputText" v-focus></el-input>
    <div style="margin-top: 100px">
      <tag :params="{ color: 'red', innerHTML: '你好呀' }"></tag>
    </div>
-------------------------------------
    <div id="dynamic-arguments-example" class="demo full-page">
      <h2>Scroll down the page</h2>
      <input type="range" min="0" max="500" v-model="pinPadding" />
      <p v-pin:[direction]="pinPadding">
        Stick me {{ pinPadding }}px from the {{ direction }} of the page
      </p>
    </div>
  </div>
</template>
<script>
import { h, toRef, reactive, toRefs, ref } from "vue";

export default {
  name: "NY",
  setup() {
    const obj1 = reactive({ name: "你改变不了我", age: 12 });
    const toRefObj = toRef(obj1, "name");

    const obj2 = reactive({ name: "你能改变我", age: 15 });
    const refObj = ref(obj2.age);

    function changeRef() {
      refObj.value = "我已经被改变了";
    }

    function changeToRef() {
      toRefObj.value = "糟糕,我出来了";
    }

    return { toRefObj, refObj, changeRef, changeToRef };
  },
};
</script>
<style scoped lang="scss">
.inputText {
  width: 100px;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
