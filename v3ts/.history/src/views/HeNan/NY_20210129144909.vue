<template>
  <div class="root">
    <el-button @click="goDetail">跳转</el-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import aa from '../../style/element-variables.scss'
export default {
  name: "NY",
  setup() {
    console.log(aa)
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