<template>
    <div id="app">
        <Header/>
        <div class="container-fluid">
            <div class="row">
                <LeftNavi></LeftNavi>

                <main v-if="user.uid" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <H1 :h1="$route.name"/>
                    <router-view />
                </main>
                <div v-else>
                    <div id="firebaseui-auth-container"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNavi from './components/LeftNavi.vue'
import H1 from './components/H1.vue'
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';

export default {
    name: 'App',
    components: {
        Header,
        LeftNavi,
        H1,
    },
    data () {
        return {
            user: {},  // ユーザー情報
        }
    },
    mounted: function() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                var ui = new firebaseui.auth.AuthUI(firebase.auth());
                ui.start('#firebaseui-auth-container', {
                    signInSuccessUrl: '/',
                    signInOptions: [
                        firebase.auth.EmailAuthProvider.PROVIDER_ID
                    ],
                });
            }
        });
    },
}
</script>

<style>
// Bootstrap dashboard css
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}
</style>
