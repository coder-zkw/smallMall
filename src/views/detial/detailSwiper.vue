<template>
    <swiper class="detialSwiper">
        <swiper-item v-for="item in images" :key="item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
    props: {
        images:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>
<style scoped>
    .detialSwiper{
        height: 300px;
        overflow: hidden;
    }
</style>