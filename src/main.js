import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store'
import Toast from 'views/detial/toast.js'
import FastClick from 'fastclick'

Vue.use(ElementUi)
//安装toast插件，自定义的提示插件
Vue.use(Toast)
//解决移动端300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
