import Vue from 'vue';
import Router from 'vue-router';

import Containers from './components/pages/Containers';
import Images from './components/pages/Images';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    // home
    {
      path: '/containers',
      name: 'Containers',
      component: Containers,
    },
    {
      path: '/images',
      name: 'Images',
      component: Images,
    },
    {
      path: '*',
      redirect: '/containers',
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
