<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad(index)">
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        imageLoad(index) {
            if(this.banners.length === index+1){
                this.$emit('imageLoad')
            }
        }
    }
}
</script>
<style scoped>
  
</style>