import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Sort = () => import('../views/sort/sort')
const Cart = () => import('../views/shopcart/shopcart')
const Profile = () => import('../views/profile/profile')
const Detial = () => import('../views/detial/detial')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/shopcart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detial/:id',
    component: Detial
  }
]

export default new Router({
  routes,
  mode: 'history'
})
