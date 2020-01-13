<template>
    <div class="rate">
        <div class="header">
            <span>用户评价</span>
            <a href="#" class="more">
                <span>更多</span>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.188 7.999l-3.359 3.359a.75.75 0 101.061 1.061l3.889-3.889a.75.75 0 000-1.061L6.89 3.58a.75.75 0 10-1.061 1.061l3.359 3.358z"></path>
                </svg>
            </a>
        </div>
        <div class="content" v-if="rates.list">
            <div class="user">
                <img :src="rates.list[0].user.avatar" alt="">
                <h4>{{rates.list[0].user.name}}</h4>
            </div>
            <div>{{rates.list[0].content}}</div>
            <div class="record">
                <span>{{rates.list[0].created | showDate}}</span>
                <span> {{rates.list[0].style}}</span>
            </div>
            <div>
                <img :src="rates.list[0].images[0]" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {formatDate} from '@/utils/formatDate'

export default {
    props: {
        rates: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        showDate(time) {
            const date = new Date(time  * 1000)
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
            // let Y = date.getFullYear() + '-'
            // let M = (date.getMonth()+1) + '-'
            // let D = date.getDate() + ' '
            // let h = date.getHours() + ':'
            // let m = date.getMinutes() + ':'
            // let s = date.getSeconds()
            // return Y+M+D+h+m+s
        }
    }
}
</script>
<style scoped>
    .rate{
        padding: 10px;
        border-bottom: 4px solid #e6e6e6;
    }
    .header{
        line-height: 38px;
        position: relative;
        border-bottom: 3px solid #e6e6e6;
    }
    .more{
        position: absolute;
        right: 0;
        display: inline-block;
        vertical-align: top;
    }
    .more svg{
        width: 16px;
        height: 14px;
    }
    .more svg path{
        color: rgb(117, 117, 117);
    }
    .user{
        padding: 14px 0;
        line-height: 32px;
        display: flex;
    }
    .user img{
        width: 32px;
    }
    .user h4{
        float: left;
        margin-left: 20px;
    }
    .record{
        font-size: 12px;
        padding: 10px 0;
    }
</style>