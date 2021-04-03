import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../components/Main.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:woeid',
      component: Main,
    },
    {
      path: '/',
      redirect: '/2122265',
    },
  ],
});
