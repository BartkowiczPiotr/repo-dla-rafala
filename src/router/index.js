import Vue from 'vue';
import VueRouter from 'vue-router';

/* user */

import Login from '../views/Login/Login.vue';

/* dashboard */

import Dashboard from '../views/Dashboard/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/dashboard',
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      reqAuth: true,
    },
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.matched.some((route) => route.meta.reqAuth)) {

    const token = JSON.parse(localStorage.getItem('token'));

    if (!token) {

      next('/');
      return;

    }

    next();
    return;

  }

  next();

});

export default router;
