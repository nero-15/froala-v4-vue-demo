import Vue from 'vue'
import Router from 'vue-router'

import Top from './views/Top.vue'
import Create from './views/Create.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: "/",
    routes: [
        { path: '/', name: 'top', component: Top},
        { path: '/create', name: 'create', component: Create },
        { path: '/article/:id', name: 'edit', component: Create },
    ]
})
