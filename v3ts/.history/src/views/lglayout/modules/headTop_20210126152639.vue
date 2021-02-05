<template>
  <div class="heads">
    <div class="price"><p>Hello&nbsp;World</p></div>
    <div class="titleBlockBox">
      <div class="titleBlock" v-for="item in menus" :key="item.id">
        <router-link :to="item.path">
         {{ $t("menu." + item.name) }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed,  watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const { locale } = useI18n();
    const { getters } = useStore();
     watch(locale,(a,b)=>{
         console.log(a)
    })
    const menus = computed(() => {
      return getters.menus.filter((item) => {
        return item.type === 2;
      })[0].children;
    });
    return { menus };
  },
};
</script>
<style scoped  lang="scss">
.heads {
  width: 100%;
  height: 60px;
  background: lightgray;
  display: flex;
  // border-bottom: 1px solid black;
  box-sizing: border-box;
  .price {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 60px 60px 140px;
    transform: rotateX(180deg);
    text-align: left;
    line-height: 60px;
    border-color: transparent transparent #118c8b #118c8b;
    p {
      transform: rotateX(-180deg) translateX(-100px);
      font-weight: bold;
    }
  }

  .titleBlockBox {
    margin-left: -20px;
    display: flex;
    .titleBlock {
      width: 100px;
      height: 60px;
      line-height: 60px;
      background:rgba(2, 17, 52, 0.3);
      transform: skew(-45deg);
      margin: 0 10px;
    }
  }

  a {
    color: white;
    display: inline-block;
    font-size: 22px;
    transform: skew(45deg);
    text-decoration: none;
  }
  .router-link-active {
    color: red;
  }
}
</style>
