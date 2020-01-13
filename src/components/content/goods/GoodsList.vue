<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'

export default {
    props: {
        goods: {
            type: Array,
            defalut() {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>
<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>