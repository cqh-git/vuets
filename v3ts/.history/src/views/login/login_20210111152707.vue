<template>
  <div class="home">
    <div id="snowzone"></div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :hide-required-asterisk="true"
    >
      <el-form-item label="账号：" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          :loading="loading"
        >
          <span v-if="loading">登陆中</span>
          <span v-else>登陆</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import Snows from "./snow";
import { postAccount } from "../../api/user";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "Home",
  data() {
    return {
      aa: require("../../assets/img/m1.png"),
      ruleForm: {
        userName: "admin",
        password: "123456",
      },
      rules: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  setup() {
    setInterval(() => {
      const left = Math.random() * window.innerWidth;
      const height = Math.random() * window.innerHeight;
      // const src = require(`@/assets/img/m${Math.floor( Math.random() * 4 + 1)}.png`);  
      const src = require(`@/assets/img/m1}.png`);  
      console.log(src);
      const Snowss = new Snows(
        left,
        height,
        src,
        document.getElementById("snowzone")
      );
      Snowss.snow();
    }, 1500);

    const $store = useStore();
    const loading = ref(false);
    const $router = useRouter();
    const { ctx }: any = getCurrentInstance();
    function submitForm(formName: any) {
      ctx.$refs[formName].validate((valid: any) => {
        if (!valid) return false;
        loading.value = true;
        postAccount(ctx.ruleForm)
          .then((res: any) => {
            if (res.status === "200") {
              loading.value = false;
              ctx.$message.success(res.msg);
              const state = { uuid: res.uuid, token: res.token };
              $store.dispatch("setStorage", state);
              $router.push({ path: "/" });
            } else {
              ctx.$message(res.msg);
              loading.value = false;
            }
          })
          .catch(() => {
            loading.value = false;
          });
      });
    }

    return { submitForm, loading };
  },
});
</script>
<style  lang="scss" scoped>
.home {
  background: rgb(170, 245, 241);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  #snowzone {
    // width: 100%;
    height: 100%;
  }
  .el-form {
    width: 400px;
    /deep/label {
      color: #66b1ff;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>