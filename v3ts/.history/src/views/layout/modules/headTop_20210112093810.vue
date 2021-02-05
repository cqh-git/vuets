<template>
  <div class="headTop">
    <p></p>
    <p class="title">风月残华</p>
    <el-popover placement="top-start" :width="150" trigger="hover">
      <template #reference>
        <img src="../../../assets/img/webp.webp" alt="" />
      </template>
      <p class="title">欢迎登陆,风月残华</p>
      <p @click="loginOut" class="loginOut">
        <i class="iconfont icontuichu1"></i>&nbsp;<span>退出登陆</span>
      </p>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "headTop",
  setup() {
    const router = useRouter();
    const { commit, getters } = useStore();
    const isCollapse = computed(() => getters.isCollapse);
    function loginOut() {
      commit("clearStorage");
      router.push({ path: "/login" });
    }
    return {
      loginOut,
      isCollapse,
    };
  },
});
</script>
<style  lang="scss" scoped>
.el-popover > .title {
  border-bottom: 1px solid lightgrey;
}
.el-popover > .loginOut {
  cursor: pointer;
  margin: 5px 0;
  &:hover {
    color: lightgrey;
  }
}
.headTop {
  width: 100%;
  height: 60px;
  background: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  float: right;
  .title {
    font-weight: bold;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>