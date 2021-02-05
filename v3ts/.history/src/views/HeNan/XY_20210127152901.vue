<template>
  <div class="root">
   
  </div>
</template>
<script>

export default {
  name: "XY",
  setup() {
    let obj1 =reactive({ name: "你改变不了我", age: 12 });
	let toRefObj = toRef(obj1, "name");
	
	
    let obj2 = reactive({ name: "你能改变我", age: 15 });
    let refObj = ref(obj2.age);
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
<style scoped  lang="scss">
</style>