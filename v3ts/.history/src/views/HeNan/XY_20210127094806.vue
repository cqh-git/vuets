<template>
  <div class="root">
    
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "NY",
  setup() {
    const { push } = useRouter();
    function goDetail() {
      push({ path: "/HN/NYDetail" });
    }
    return { goDetail };
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