<template>
    <div class="recommend">
        <div class="recomItem" v-for="(item, index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{ item.title}}</div>
            </a>   
        </div>
    </div>
</template>
<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommend{
        width: 100%;
        display: flex;
        font-size: 12px;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .recomItem{
        flex: 1;
    }
    .recommend img{
        width: 70px;
        margin-bottom: 10px;
    }
</style>