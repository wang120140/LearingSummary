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
            path: "/regComponent",
            name: "regComponent",
            component: () =>
                import ("./components/JS/RegComponent.vue")
        },
        {
            path: "/DeepCloneComponent",
            name: "DeepCloneComponent",
            component: () =>
                import ("./components/JS/DeepCloneComponent.vue")
        },
        {
            path: "/SourceBase",
            name: "SourceBase",
            component: () =>
                import ("./components/VueSource/SourceBase.vue")
        },
        {
            path: "/CompatibilityComponent",
            name: "CompatibilityComponent",
            component: () =>
                import ("./components/CompatibilityComponent.vue")
        },
        {
            path: "/HttpComponent",
            name: "HttpComponent",
            component: () =>
                import ("./components/HttpComponent.vue")
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