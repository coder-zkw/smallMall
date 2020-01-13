<template>
  <div id="app">
    <keep-alive exclude="detial">
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/content/MainTabBar.vue'

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
