import Vue from 'vue';
import App from './App.vue';
import router from './router';

const globalData = new Vue({
  data: {
    language: 'English',
  },
});

export default globalData;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
