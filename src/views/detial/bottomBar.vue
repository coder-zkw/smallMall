<template>
    <div class="bottombar">
        <div class="service">
            <div>
                <span class="el-icon-chat-dot-round"></span>
                <div>客服</div>
            </div>
            <div>
                <span class="el-icon-s-shop"></span>
                <div>店铺</div>
            </div>
            <div>
                <span class="el-icon-star-off"></span>
                <div>收藏</div>
            </div>
        </div>
        <div class="operate">
            <div class="addCart" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        addToCart() {
            this.$emit('addCart')
        }
    }
}
</script>
<style scoped>
    .bottombar{
        width: 100%;
        height: 49px;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        vertical-align: middle;
        background-color: #fff;
    }
    .service, .operate{
        flex: 1;
        display: flex;
        text-align: center;
    }
    .service>div, .operate>div{
        flex: 1;
    }
    .service span{
        font-size: 24px;
        padding: 3px 0;
    }
    .operate .addCart{
        font-weight: 700;
        line-height: 49px;
        background-color:gold;
    }
    .operate .buy{
        color: #fff;
        line-height: 49px;
        background-color: var(--color-tint);
    }
</style>