<template>
    <div class="shop">
        <div class="header">
            <img :src="shop.logo" alt="">
            <h3>{{shop.name}}</h3>
        </div>
        <div class="body">
            <div class="left">
                <div>
                    <div class="large">{{shop.sells}}</div>
                    <div>总销量</div>
                </div>
                <div>
                    <div class="large">{{shop.goodsCount}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="right" v-if="shop.score">
                <p v-for="item in shop.score.length" :key="item">
                    <span>{{shop.score[item-1].name}}</span>
                    <span class="colorlow" :class="{colorhigh: shop.score[item-1].isBetter}">
                        {{shop.score[item-1].score}}
                    </span>
                    <span 
                        class="bglow" 
                        :class="{align:shop.score[item-1].isBetter,bghigh: shop.score[item-1].isBetter}"
                    >
                        {{shop.score[item-1].isBetter ? '高' : '低'}}
                    </span>
                </p>
            </div>
        </div>
        <div class="footer">
            <div>进店逛逛</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .shop{
        padding: 10px;
        font-size: 13px;
        padding-bottom: 30px;
        border-bottom: 4px solid #e6e6e6;
    }
    .header{
        display: flex;
    }
    .header img{
        width: 60px;
        height: 60px;
    }
    .header h3{
        margin-left: 10px;
        line-height: 60px;
        font-size: 16px;
    }
    .body{
        display: flex;
        margin: 20px 0;
        text-align: center;
    }
    .body > div{
        flex: 1;
    }
    .body .left{
        display: flex;
        height: 44px;
        margin-top: 14px;
        border-right: 1px solid #e2e2e2;
    }
    .body .left>div{
        flex: 1;
    }
    .large{
        font-size: 22px;
        margin-bottom: 5px;
    }
    .right{
        
        text-align: left;
    }
    .right p{
        line-height: 25px;
        padding-left: 30px;
    }
    .right p span{
        width: 30px;
        padding: 0 4px;
    }
    .right p span.align{
        margin-left: 19px;
    }
    .colorlow{
        color: #38be77;
    }
    .colorhigh{
        color: #e45252;
    }
    .bglow{
        color: #fff;
        background-color: #38be77;
    }
    .bghigh{
        color: #fff;
        background-color: #e45252;
    }
    .footer div{
        width: 46%;
        line-height: 30px;
        margin: 0 auto;
        text-align: center;
        background-color: #e1e3d9;
        border-radius: 10px;
    }
</style>