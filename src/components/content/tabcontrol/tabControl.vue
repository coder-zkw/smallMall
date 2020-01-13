<template>
    <div class="tabcontrol">
        <div class="controlItem" v-for="(item, index) in titles" :key="index"
        :class="{active: index === currentItem}" @click="controlClick(index)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentItem: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        controlClick(index) {
            this.currentItem = index
            this.$emit('currtype', index)
        }
    }
}
</script>
<style scoped>
    .tabcontrol{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background: #fff;
    }
    .controlItem{
        flex: 1;
    }
    .controlItem span{
        padding: 5px;
    }
    .active span{
        color: var(--color-height-text);
        border-bottom: 3px solid var(--color-tint);
    }
</style>