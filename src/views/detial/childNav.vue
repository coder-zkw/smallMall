<template>
    <div class="title">
        <div 
            class="titleItem" 
            :class="{active: index===currentIndex}"
            v-for="(item, index) in title" 
            :key="index"
            @click="clickTitle(index)"
        >
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        clickTitle(index) {
            this.currentIndex = index
            this.$emit('clickTitle', index)
        }
    }    
}
</script>
<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }
    .titleItem{
        flex: 1;
    }
    .active{
        color: var(--color-height-text);
    }
</style>