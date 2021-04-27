import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '@/views/Registration/Registration.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '@/views/Contact/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
