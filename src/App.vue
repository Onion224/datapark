<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
// 在header中并不需要export name:'AppHeader',只需在使用该组件的时候为它命名即可
// 在Vue中,驼峰式命名在template中用小写+'-'的方式连接,Vue中是不区分大小写的
import AppHeader from "./components/head/header.vue";

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
