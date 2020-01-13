<template>
    <div class="params">
        <ul class="size">
            <li v-for="(item,index) in params.tables" :key="index">
                <span v-for="itemchild in item" :key="itemchild">
                    {{itemchild}}
                </span>
            </li>
        </ul>
        <ul class="itemparams">
            <li v-for="(item, index) in params.set" :key="index">
                <span class="title">{{item.key}}</span>
                <span class="content">{{item.value}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        params: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .params{
        padding: 10px;
        font-size: 13px;
        border-bottom: 4px solid #e6e6e6;
    }
    .size li, .itemparams li{
        display: flex;
        line-height: 34px;
        border-bottom: 1px solid #eee;
    }
    .size li>span{
        flex: 1;
    }
    .size{
        border-bottom: 3px solid #e6e6e6;
    }
    .itemparams .title{
        flex: 1;
    }
    .itemparams .content{
        flex: 4;
        color: var(--color-height-text);
    }
</style>