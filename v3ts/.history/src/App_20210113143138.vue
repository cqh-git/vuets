<template>
  <div id="app">
    <router-view name="sideBar" />
    <router-view name="headBody" />
    <router-view />
  </div>
</template>

<style  lang="scss">
@import url("./style/common.scss");
@import url("./style/sideBar.scss");
// @import url("./style/mixin.scss");
</style>
