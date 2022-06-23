import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/pages/Home';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    // home
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
