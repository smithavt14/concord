import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BaiduMap from 'vue-baidu-map'
import Footer from './components/footer.vue'
import HomeNavBar from './components/HomeNavBar.vue'

Vue.use(BootstrapVue)

Vue.use(BaiduMap, {
  ak: 'sFgM150Y1IqNbx6BvXEGcHOt9tui9DaY'
})

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
