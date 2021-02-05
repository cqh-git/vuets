<template>
  <div class="root">
    <el-button @click="goDetail">跳转</el-button>
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

</style>