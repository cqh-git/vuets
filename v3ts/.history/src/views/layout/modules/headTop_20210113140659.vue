<template>
  <div class="headTop">
    <p></p>
    <p class="title">风月残华</p>
    <div class="rightBox">
      <el-color-picker
        size="small"
        @change="changeColor"
        v-model="mainColor"
      ></el-color-picker>
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
  </div>
</template>

<script lang="ts">
import { changeThemeColor, curColor } from "../../../../../src/units/themeColorClient";
import { computed, defineComponent, reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "headTop",
  setup() {
    const mainColor = curColor;
    const router = useRouter();
    const { commit, getters } = useStore();
    const { ctx }: any = getCurrentInstance();
    const isCollapse = computed(() => getters.isCollapse);
    function loginOut() {
      commit("clearStorage");
      router.push({ path: "/login" });
    }
    function changeColor(newColor: any) {
      changeThemeColor(newColor).then(() => {
        ctx.$message.success("主题色切换成功~");
      });
    }
    return {
      changeColor,
      mainColor,
      loginOut,
      isCollapse,
    };
  },
});
</script>
<style  lang="scss" scoped>
@import url("@/style/mixin.scss");
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
  border-bottom: 2px solid #3296fa;
  padding: 0 15px;
  box-sizing: border-box;
  float: right;
  @include flexLay;
  .rightBox {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /deep/.el-color-picker {
      margin-right: 10px;
    }
  }
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
