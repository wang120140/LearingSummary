<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Flex</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- 文件说明 -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss"scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
