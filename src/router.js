import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FlexSummary from './components/CSS/FlexSummary.vue'
//import App from './App.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'app',
            component: Home
        },
        {
            path: "/FlexSummary",
            name: "FlexSummary",
            component: FlexSummary
        },

        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})