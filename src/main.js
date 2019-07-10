import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './config/http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/common.css'
// const { httpUrl } = httpUrl

Vue.prototype.$httpUrl = http

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
