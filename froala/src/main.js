import Vue from 'vue'
import App from './App.vue'

// Require bootstrap
require('bootstrap/dist/js/bootstrap.min.js')
require('bootstrap/dist/css/bootstrap.min.css')

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
