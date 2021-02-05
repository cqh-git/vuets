<template>
  <div class="root">
    <div class="box">我是南阳详情</div>
  </div>
</template>
<script>
export default {
  name: "a1",
};
</script>
<style scoped  lang="scss">
@import "@/style/mixin.scss";
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  @include flexLay($h: center);
}
</style>