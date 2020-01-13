<template>
    <div class="childCart">
        <div class="cartLeft">
            <span class="el-icon-success" :class="{check: iteminfo.checked}" @click="clickCheck"></span>
            <img :src="iteminfo.image" alt="">
        </div>
        <div class="childRight">
            <h5>{{iteminfo.title}}</h5>
            <p>{{iteminfo.desc}}</p>
            <div>
                <span class="price">{{iteminfo.price}}</span>
                <span class="count">x{{iteminfo.count}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        iteminfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        clickCheck() {
            this.iteminfo.checked = !this.iteminfo.checked
        }
    }
}
</script>
<style scoped>
    .childCart{
        padding: 8px 4px;
        display: flex;
        background-color: #fff;
        border-bottom: 2px solid #e4e4e4;
    }
    .cartLeft{
        width: 25%;
        display: flex;
        align-items: center;
    }
    .cartLeft img{
        width: 72px;
        height: 94px;
        margin-left: 3px;
        border-radius: 3px;
    }
    .childRight{
        width: 75%;
        padding-left: 10px;
        position: relative;
    }
    .childRight h5, .childRight p{
        width: 100%;
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .childRight p{
        font-size: 12px;
        padding: 20px 0;
    }
    .price{
        color: rgb(230, 154, 12);
    }
    .count{
        position: absolute;
        right: 0;
    }
    .el-icon-success{
        color: #e2e2e2;
    }
    .check{
        color: var(--color-tint);
    }
</style>