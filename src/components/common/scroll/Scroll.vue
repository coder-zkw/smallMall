<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        isPull: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            mouseWheel: true, 
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.isPull
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('contentscroll', position)
        })
        this.scroll.on('pullingUp', () => {
            this.$emit('pullData')
        })
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>
<style scoped>

</style>