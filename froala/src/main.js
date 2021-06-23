import Vue from 'vue'
import VueFroala from 'vue-froala-wysiwyg'
import App from './App.vue'
import router from './router.js'

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/dashboard.css";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import feather from "feather-icons/dist/feather.min.js";
import "froala-editor/js/froala_editor.pkgd.min.js";

Vue.use(VueFroala)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

feather.replace();
