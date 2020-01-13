<template>
    <div id="tab-bar">
      <!-- <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div> -->
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" class="el-icon-s-home">首页</el-menu-item>
      <el-menu-item index="2" class="el-icon-menu">分类</el-menu-item>
      <el-menu-item index="3" class="el-icon-shopping-cart-2">购物车</el-menu-item>
      <el-menu-item index="4" class="el-icon-user">我的</el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect() {

      }
    }
}
</script>
<style scoped>
  @import "../../assets/css/basc.css";
  
  .el-menu{
    height: 49px;
    display: flex;
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .15);
  }
  .el-menu-item{
    flex: 1;
    text-align: center;
  }
</style>