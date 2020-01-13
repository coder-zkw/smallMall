<template>
    <div class="cartlist">
        <nav-bar class="navbar">
            <div slot="center">购物车({{cartlist.length}})</div>
        </nav-bar>
        <scroll class="content">
            <child-cart v-for="(item, index) in cartlist" :key="index+1" :iteminfo="item"/>
            
        </scroll>
        <total-bar/>
    </div>
</template>
<script>
import navBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import childCart from 'views/shopcart/childComps/childItem'
import totalBar from 'views/shopcart/childComps/totleBar'

export default {
    components: {
        navBar,
        Scroll,
        childCart,
        totalBar
    },
    data() {
        return {
            cartlist: this.$store.state.cartList
        }
    }
}
</script>
<style scoped>
    .cartlist{
        height: 100vh;
    }
    .navbar{
        color: #fff;
        background-color: var(--color-tint);
        position: relative;
        z-index: 10;
    }
    .content{
        height: calc(100% - 44px - 49px - 40px);
    }
</style>