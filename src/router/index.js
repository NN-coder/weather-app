import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../components/Main.vue';

const routes = [
  {
    path: '/:woeid',
    component: Main,
  },
  {
    path: '/',
    redirect: '/2122265',
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
