import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/dashboard.css";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import feather from "feather-icons/dist/feather.min.js";

import "froala-editor/js/froala_editor.pkgd.min.js";
import VueFroala from 'vue-froala-wysiwyg'


// vue router
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes
})


Vue.use(VueRouter)
Vue.use(VueFroala)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

feather.replace();
