<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control 
            class="tabControlFixed"
            :titles="['流行', '新款', '精选']" 
            @currtype="selectType"
            ref="tabControl2"
            v-show="tabControlFixed"
        />
        <scroll 
            class="content" 
            ref="scroll" 
            :probeType="3" 
            @contentscroll="contentScroll"
            @pullData="loadMore"
            :isPull="true">
            <home-swiper :banners="banners" @imageLoad="imageLoad"/>
            <home-recommend :recommends="recommends"/>
            <home-feature/>
            <tab-control 
                :titles="['流行', '新款', '精选']" 
                @currtype="selectType"
                ref="tabControl"
            />
            <goods-list :goods="currentData"></goods-list>
        </scroll>
        <back-top @click.native="backTop()" v-show="isShow"></back-top>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import HomeRecommend from './childComps/recommendView'
import HomeFeature from './childComps/featureView'

import TabControl from 'components/content/tabcontrol/tabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {debounce} from '@/utils/debounce'

export default {
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommend,
        HomeFeature,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []}
            },
            type: 'pop',
            isShow: false,
            tabControlOffset: 0,
            tabControlFixed: false,
            saveY: 0
        }
    },
    created() {
        this.getMultidata()
        this.getGoods('pop')
        this.getGoods('new')
        this.getGoods('sell')
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh,50)
        this.$bus.$on('itemImageLoad', () => {
            refresh()
        })
    },
    computed: {
        currentData() {
            return this.goods[this.type].list
        }
    },
    activated() {
        this.$refs.scroll.refresh()//刷新一次，detial页面忽略alive后,从detial页面返回主页不保留bug
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
        
    },
    deactivated() {
        this.saveY = this.$refs.scroll.scroll.y
    },
    methods: {
        getMultidata() {
            getHomeMultidata().then((res) => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
                //console.log(res.data);
            })
        },
        getGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                if(res) {
                    //this.goods[type].list = res.data[type]
                    this.goods[type].list.push(...res.data[type])
                    // this.goods[type].page += 1
                }
                this.$refs.scroll.finishPullUp()
            })
        },
        selectType(index) {
            switch(index) {
                case 0 : this.type = 'pop'
                break
                case 1 : this.type = 'new'
                break
                case 2 : this.type = 'sell'
                break
            }
            this.$refs.tabControl.currentItem = index
            this.$refs.tabControl2.currentItem = index
        },
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        contentScroll(position) {
            this.isShow = (-position.y) > 1000
            this.tabControlFixed = (-position.y) > this.tabControlOffset
        },
        loadMore() {
            this.getGoods(this.type)
        },
        imageLoad() {
            //console.log(this.$refs.tabControl.$el.offsetTop)
            this.$refs.scroll.refresh()
            this.tabControlOffset = this.$refs.tabControl.$el.offsetTop
        }
    }
}
</script>
<style scoped>
    #home{
        height: 100vh;/*给home整个视图的高度，下拉才不会滑出视图 */
        padding-top: 44px;
        position: relative;
    }
    .home-nav{
        background: var(--color-tint);
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    .tabControlFixed{
        position: relative;
        z-index: 2;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    /* .content{
        height: calc(100% - 93px);
        overflow: hidden;
    } */
</style>