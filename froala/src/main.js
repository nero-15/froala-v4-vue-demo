import Vue from 'vue'
import VueFroala from 'vue-froala-wysiwyg'
import App from './App.vue'
import router from './router.js'

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJVlSytsb5anBHGvGTuY3u4KYLEWn3uME",
    authDomain: "froala-v4-vue-demo.firebaseapp.com",
    projectId: "froala-v4-vue-demo",
    storageBucket: "froala-v4-vue-demo.appspot.com",
    messagingSenderId: "524881768806",
    appId: "1:524881768806:web:f511a5a40a773ae31618a7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
