import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
