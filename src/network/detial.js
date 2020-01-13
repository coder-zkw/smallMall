import {request} from 'network/request'

export function getDetail(id) {
    return request({
        url: `/${id}`,
        method: 'post'
    })
}

export function getRecommend() {
    return request({
        url: '/recommend',
        method: 'get'
    })
}

export class GoodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}

export class Shop {
    constructor(shop) {
        this.name = shop.name
        this.logo = shop.shopLogo
        this.fans = shop.cFans
        this.sells = shop.cSells
        this.score = shop.score
        this.goodsCount = shop.cGoods
    }
}

export class Params {
    constructor(params, rule) {
        this.goodsKey = params.key
        this.set = params.set
        this.desclaimer = rule.desclaimer
        this.ruleKey = rule.key
        this.tables = rule.tables
    }
}