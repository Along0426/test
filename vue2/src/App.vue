<template>
  <div id="app">
    <!-- <router-link to="/">图书管理</router-link> |
    <router-link to="Change">点击换色</router-link> |
    <router-link to="/Counter">计算器</router-link> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
</style>
