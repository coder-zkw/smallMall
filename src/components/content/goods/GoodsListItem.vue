<template>
    <div class="listItem" @click="clickItem">
        <!-- <a :href="goodsItem.src"> -->
            <img :src="goodsItem.image" alt="" @load="imageLoad">
        <!-- </a> -->
        <div class="goodsInfo">
            <p>{{goodsItem.title}}</p>
            <span class="old">原价{{goodsItem.oldPrice}}</span>
            <span class="new">￥{{goodsItem.currentPrice}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageLoad() {
            this.$bus.$emit('itemImageLoad')
        },
        clickItem() {
            this.$router.push('/detial/' + this.goodsItem.itemId)
        }
    }
}
</script>
<style scoped>
    .listItem{
        width: 48%;
        padding: 5px 0;
    }
    .listItem img{
        width: 100%;
        border-radius: 5px;
    }
    .goodsInfo{
        font-size: 14px;
        text-align: center;
        padding: 3px 0;
    }
    .goodsInfo p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .old{
        font-size: 12px;
        text-decoration: line-through;
    }
    .new{
        color: var(--color-tint);
    }
</style>