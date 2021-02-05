<template>
  <div id="app">
    <router-view name="sideBar" :key="routerKey"/>
    <router-view name="headBody" :key="routerKey"/>
    <router-view :key="routerKey"/>
  </div>
</template>

<style  lang="scss">
@import url("./style/common.scss");
@import url("./style/sideBar.scss");
// @import url("./style/mixin.scss");
</style>
