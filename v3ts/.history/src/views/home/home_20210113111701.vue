<template>
  <div class="home">
    <el-button @click="goOthers" type="primary">跳转</el-button>
    <!-- <el-color-picker size="small" @change="changeColor" v-model="mainColor">
    </el-color-picker> -->
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { changeThemeColor, curColor } from "../../../../src/units/themeColorClient";
import { defineComponent } from "vue";
import { getCurrentInstance } from "vue";
export default defineComponent({
  name: "Home",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      mainColor: curColor,
    };
  },
  methods: {
    changeColor(newColor: any) {
      changeThemeColor(newColor).then(() => {
        alert("主题色切换成功~");
      });
    },
  },
  setup() {
    const { ctx }: any = getCurrentInstance();
    function goOthers() {
      ctx.$push("/HN/NY");
    }
    return { goOthers };
  },
});
</script>
