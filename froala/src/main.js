import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBJVlSytsb5anBHGvGTuY3u4KYLEWn3uME",
    authDomain: "froala-v4-vue-demo.firebaseapp.com",
    projectId: "froala-v4-vue-demo",
    storageBucket: "froala-v4-vue-demo.appspot.com",
    messagingSenderId: "524881768806",
    appId: "1:524881768806:web:f511a5a40a773ae31618a7"
});

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/dashboard.css";

// JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import feather from "feather-icons/dist/feather.min.js";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

feather.replace();
