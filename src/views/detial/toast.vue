<template>
    <div class="toast" v-show="isShow">
        {{ message }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message, delay=1500) {
            this.isShow = true
            this.message = message
            setTimeout(() => {
                this.isShow = false
                this.message = ''
            }, delay)
        }
    }
}
</script>
<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        color: #fff;
        background-color: rgba(0, 0, 0, .8);
        z-index: 999;
    }
</style>