<template>
    <div class="detial">
        <nav-bar class="navbar">
            <div slot="left" class="left" @click="backClick">
                <img src="~assets/img/detail/back.png" alt="">
            </div>
            <div slot="center">
                <child-nav @clickTitle="scrollToTitle" ref="navIndex"/>
            </div>
        </nav-bar>
        <scroll class="content" ref="scroll" :probeType="3" @contentscroll="scrollPosition">
            <detail-swiper :images="imageTop"/>
            <detail-info :infos="goods"/>
            <shop-info :shop="shop"/>
            <effect :effects="effects" @listLoad="listLoad"/>
            <goods-params :params="params" ref="params"/>
            <rate-info :rates="rates" ref="rates"/>
            <goods-list :goods="recommends" ref="recommends"/>
        </scroll>
        <bottom-bar @addCart="addToCart"/>
        <back-top @click.native="backTop()" v-show="isShow"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import ChildNav from 'views/detial/childNav'
import detailSwiper from 'views/detial/detailSwiper'
import detailInfo from 'views/detial/detialInfo'
import shopInfo from 'views/detial/shopInfo'
import Scroll from 'components/common/scroll/Scroll'
import Effect from 'views/detial/effect'
import goodsParams from 'views/detial/goodsParams'
import rateInfo from 'views/detial/rateInfo'
import goodsList from 'components/content/goods/GoodsList'
import bottomBar from 'views/detial/bottomBar'
// import Toast from 'views/detial/toast'

import {getDetail, GoodsInfo, Shop, Params, getRecommend} from 'network/detial'
import {backTopMixin} from '@/utils/mixin'

export default {
    name: 'detial',
    components: {
        NavBar,
        ChildNav,
        detailSwiper,
        detailInfo,
        shopInfo,
        Scroll,
        Effect,
        goodsParams,
        rateInfo,
        goodsList,
        bottomBar,
        // Toast
    },
    mixins: [backTopMixin],
    data() {
        return {
            itemId: null,
            imageTop: [],
            goods: {},
            shop: {},
            effects: {},
            params: {},
            rates: {},
            recommends: [],
            scrollOffset: [],
            currentIndex: 0
        }
    },
    created() {
        const id = this.$route.params.id
        this.itemId = id
        
        this.getDetails(id)
        this.getRecommends()
    },
    methods: {
        getRecommends() {
            getRecommend().then(res => {
                if(res) {
                    this.recommends = res.data.recommend
                }
            })
        },
        backClick() {
            this.$router.back()
        },
        getDetails(id) {
            getDetail(id).then(res => {
                //console.log(res.data); 
                if(res) {
                    const data = res.data
                    this.imageTop = data.imageTop
                    this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
                    this.shop = new Shop(data.shopInfo)
                    this.effects = data.effect
                    this.params = new Params(data.itemParams, data.rule)
                    this.rates = data.rate
                }
            })
        },
        listLoad() {
            this.$refs.scroll.refresh()

            this.scrollOffset.push(0)
            this.scrollOffset.push(this.$refs.params.$el.offsetTop-44)
            this.scrollOffset.push(this.$refs.rates.$el.offsetTop-44)
            this.scrollOffset.push(this.$refs.recommends.$el.offsetTop-44)
        },
        scrollToTitle(index) {
            this.$refs.scroll.scrollTo(0, -this.scrollOffset[index], 10)
        },
        scrollPosition(position) {
            const positionY = -position.y
            const len = this.scrollOffset.length
            for(let i = 0; i < len; i++) {
                if(this.currentIndex != i && positionY > this.scrollOffset[i] && positionY < (this.scrollOffset[i+1] || Infinity)) {
                    this.currentIndex = i
                    this.$refs.navIndex.currentIndex = this.currentIndex
                }
            }
            // mixin中定义的方法
            this.contentScroll(position)
        },
        addToCart() {
            const product = {}
            product.id = this.itemId
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.newPrice
            product.image = this.imageTop[0]
    
            this.$store.dispatch('addCart', product).then(res => {
                //console.log(res)
                this.$toast.show(res, 1500)
            })
        }
    }
}
</script>
<style scoped>
    .detial{
        position: relative;
        z-index: 2;
        background-color: #fff;
        height: 100vh;
    }
    .navbar{
        position: relative;
        z-index: 3;
        background-color: #fff;
    }
    .left img{
        width: 24px;
        margin: 10px;
    }
    .content{
        height: calc(100% - 44px - 49px);
    }
</style>