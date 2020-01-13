<template>
    <div class="effect" v-if="effects">
        <div class="privilege">
            <p>@________</p>
            <div v-if="effects.privilege">
                <span v-for="item in effects.privilege.length" :key="item">
                    【{{effects.privilege[item-1]}}】
                </span>
            </div>
            <p style="textAlign: right">________@</p>
        </div>
        <div class="key">
            <h4>{{effects.key}}</h4>
        </div>
        <div v-for="(item,index) in effects.images" :key="index">
            <img :src="item" alt="" @load="imageLoad">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        effects: {
            type: Object,
            defaut() {
                return {}
            }
        }
    },
    data() {
        return {
            imageLength: 0,
            count: 0
        }
    },
    methods: {
        imageLoad() {
            if(++this.count === this.imageLength) {
                this.$emit('listLoad')
            }
        }
    },
    watch: {
        effects() {
            this.imageLength = this.effects.images.length
        }
    }
}
</script>
<style scoped>
    .effect{
        font-size: 13px;
        padding: 10px;
        border-bottom: 4px solid #e6e6e6;
    }
    .privilege div{
        padding-top: 10px;
    }
    .key{
        margin: 10px 0;
    }
    .effect img{
        width: 100%;
    }
</style>