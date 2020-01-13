<template>
    <div class="totalbar">
        <div class="checkAll" @click="checkedAll">
            <span class="el-icon-success" :class="{check: isCheckedAll}"></span>
            <span>全选</span>
        </div>
        <div class="total">合计：￥{{totalPrice}}</div>
        <div class="paying" @click="paying">去付款({{goodsCount}})</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: true,
            goodsChecked: this.$store.state.cartList
        }
    },
    methods: {
        checkedAll() {
            // if(this.isCheckedAll) {
            //     this.goodsChecked.forEach(item => {
            //         item.checked = false
            //     })
            // }else {
            //     this.goodsChecked.forEach(item => {
            //         item.checked = true
            //     })
            // }
            let status = this.isCheckedAll
            this.goodsChecked.forEach(item => item.checked = !status)
        },
        paying() {
            if(!this.isCheckedAll) {
                this.$toast.show('请选择商品')
            }
        }
    },
    computed: {
        totalPrice() {
            return this.goodsChecked.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price.substring(1) * item.count //price是￥20.00
            }, 0).toFixed(2)
        },
        goodsCount() {
            return this.goodsChecked.filter(item => {
                return item.checked
            }).length
        },
        isCheckedAll() {
            if(!this.goodsChecked.length) {
                return false
            }
            // return !(this.goodsChecked.filter(item => !item.checked).length)
            return !this.goodsChecked.find(item => !item.checked) //find找到匹配结束循环，性能比上面高
        }
    }
}
</script>
<style scoped>
    .totalbar{
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 14px;
        background-color: #e4e4e4;
    }
    .checkAll{
        width: 60px;
        margin-left: 10px;
    }
    .total{
        flex: 1;
    }
    .paying{
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: rgb(207, 36, 24)
    }
    .el-icon-success{
        margin-right: 5px;
        color: #e2e2e2;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .check{
        color: var(--color-tint);
    }
</style>