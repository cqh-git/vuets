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
  components: { headTop, mainBody },
};
</script>
<style scoped  lang="scss">
.headBody {
  width: 100%;
  height: 100%;
  background: #ebf5f8;
}
</style>
