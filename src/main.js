import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const globalData = new Vue({
  data: {
    language: 'English'
  }
})

export default globalData

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
