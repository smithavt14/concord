import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('./views/Experience.vue'),
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('./views/Programs.vue'),
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('./views/Apply.vue'),
    },
  ],
});
