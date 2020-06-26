import Vue           from 'vue'
import LangRouter    from 'vue-lang-router'
import Home          from '../views/Home.vue'
import translations  from '../lang/translations'
import localizedURLs from '../lang/localized-urls'
import Portfolio     from '../views/Portfolio'

Vue.use(LangRouter, {
    defaultLanguage: 'en',
    translations,
    localizedURLs,
})

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
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
]

const router = new LangRouter({
    routes,
})

export default router
