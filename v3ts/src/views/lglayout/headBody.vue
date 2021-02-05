<template>
  <div class="headBody">
    <head-top></head-top>
    <main-body></main-body>
  </div>
</template>
<script>
import mainBody from "./modules/mainBody";
import headTop from "./modules/headTop";
export default {
  name: "Home",
  data() {
    return {
      dataValue: "我是a1页面",
    };
  },
  components: { mainBody, headTop },
};
</script>
<style scoped  lang="scss">
.headBody {
  width: 100%;
  height: 100%;
}
</style>
