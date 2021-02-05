<template>
  <div class="root"></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "XY",
  setup() {
    type User = {
      name: string,
      age: number,
    };
    const aa: User = {
      name: "tom",
      age: 121,
    };

    return {};
  },
});
</script>
<style scoped lang="scss">
</style>
