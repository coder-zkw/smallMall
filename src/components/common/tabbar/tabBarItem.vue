<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="isActive" name="item-icon-active"></slot>
        <slot v-else name="item-icon"></slot>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
            link: String,
            activeColor: {
                type: String,
                default: '#0053fd'
            }
        },
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        isActive() {
            // return this.$route.path.indexOf(this.link) !== -1
            return this.$route.path === this.link
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.link)
        }
    }
}
</script>
<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>