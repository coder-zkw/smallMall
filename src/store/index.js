import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addToCart(state, payload) {
            state.cartList.push(payload)
        },
        changeCount(state, oldProduct) {
            oldProduct.count++
        }
    },
    actions: {
        addCart(context, payload) {
            return new Promise((resolve, reject) => {
                let oldProduct = context.state.cartList.find(item => {
                    return item.id === payload.id
                })
                if(oldProduct) {
                    context.commit('changeCount', oldProduct)
                    resolve('商品+1')
                } else {
                    payload.count = 1
                    payload.checked = true
                    context.commit('addToCart', payload)
                    resolve('商品添加购物车成功')
                }
            })
            
        }
    }
})

export default store