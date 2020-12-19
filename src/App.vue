<template>
  <div id="app">
    <!-- 导航栏 做成组件 -->
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"

export default {
  name: 'App',
  components:{
    NavBar,
  }
}
</script>

<style lang="css" scoped>
#app {
  min-width: 1000px;
  }
</style>