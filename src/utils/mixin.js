import backTop from 'components/content/backTop'

export const backTopMixin = {
    components: {
        backTop
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        contentScroll(position) {
            this.isShow = (-position.y) > 1000
        }
    }
}