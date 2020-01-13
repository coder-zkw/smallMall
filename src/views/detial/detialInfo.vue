<template>
    <div class="info">
        <div class="title">
            <h4>{{infos.title}}</h4>
        </div>
        <div>
            <span class="newPrice">{{infos.newPrice}}</span>
            <span class="oldPrice">{{infos.oldPrice}}</span>
            <span class="discount" v-if="infos.discount">{{infos.discount}}</span>
        </div>
        <div class="column" v-if="infos.columns">
            <span class="sales">{{infos.columns[0]}}</span>
            <span>{{infos.columns[1]}}</span>
            <span>
                <img :src="infos.services[3].icon" alt="">
                {{infos.services[3].name}}
            </span>
        </div>
        <div class="privilege" v-if="infos.services">
            <span v-for="item in infos.services.length-1" :key="item">
                <img :src="infos.services[item-1].icon" alt="">
                {{infos.services[item-1].name}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        infos: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .info{
        padding: 10px;
        border-bottom: 4px solid #e6e6e6;
    }
    .title{
        margin-bottom: 10px;
    }
    .title h4{
        text-indent: 2em;
    }
    .newPrice{
        font-size: 24px;
        color: var(--color-height-text);
        padding-right: 6px;
    }
    .oldPrice{
        font-size: 12px;
        text-decoration-line: line-through;
    }
    .discount{
        font-size: 12px;
        vertical-align: top;
        margin-left: 6px;
        padding: 3px 6px;
        border-radius: 8px;
        color: #fff;
        background: var(--color-height-text);
    }
    .column,.privilege{
        display: flex;
        text-align: center;
        font-size: 13px;
        padding: 20px 0 10px 0;
    }
    .column{
        border-bottom: 1px solid #e2e2e2;
    }
    .column span, .privilege span{
        flex: 1;
    }
    .column :first-child, .privilege :first-child{
        text-align: left;
    }
    .column :last-child, .privilege :last-child{
        text-align: right;
    }
    .column img,.privilege img{
        width: 15px;
        vertical-align: top;
    }
</style>