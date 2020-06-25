import Vue from 'vue';
import LangRouter from 'vue-lang-router';
import Home from '../views/Home.vue';
import translations from '../lang/translations';
import localizedURLs from '../lang/localized-urls';

Vue.use(LangRouter, {
  defaultLanguage: 'en',
  translations,
  localizedURLs,
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new LangRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
