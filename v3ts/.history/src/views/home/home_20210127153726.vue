<template>
  <div class="home">

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
