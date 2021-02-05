<template>
  <div class="root">
    
  </div>
</template>
<script>

export default {
  name: "XY",
  setup() {
  
    return { };
  },
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