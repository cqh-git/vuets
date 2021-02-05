<template>
  <div class="home">
    <el-button @click="goOthers">跳转</el-button>
    <el-color-picker
  size="small"
  @change="changeColor"
  v-model="mainColor">
el-color-picker>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCurrentInstance } from "vue";
export default defineComponent({
  name: "Home",
  setup() {
    const { ctx }: any = getCurrentInstance();
    function goOthers() {
      ctx.$push("/HN/NY");
    }
    return { goOthers };
  },
});
</script>
