<template>
    <tab-bar>
        <!-- activeColor传入需要改变bar的颜色 activeColor="red"-->
      <tab-bar-item link = '/home'>
          <img slot="item-icon" src="~assets/img/TabBar/home.png" alt="">
          <img slot="item-icon-active" src="~assets/img/TabBar/home_active.png" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link = '/sort'>
        <img slot="item-icon" src="~assets/img/TabBar/sort.png" alt="">
        <img slot="item-icon-active" src="~assets/img/TabBar/sort_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link = '/shopcart'>
        <img slot="item-icon" src="~assets/img/TabBar/car.png" alt="">
        <img slot="item-icon-active" src="~assets/img/TabBar/car_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link = '/profile'>
        <img slot="item-icon" src="~assets/img/TabBar/mine.png" alt="">
        <img slot="item-icon-active" src="~assets/img/TabBar/mine_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'

export default {
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style scoped>

</style>