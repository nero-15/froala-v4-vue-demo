<template>
    <div id="app">
        <Header/>
        <div class="container-fluid">
            <div class="row">
                <LeftNavi></LeftNavi>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <H1 :h1="$route.name"/>

                    // TODO: デザイン
                    <div v-if="user.uid">
                        {{ user.displayName }}
                        <button type="button" @click="logout">ログアウト</button>
                    </div>
                    <div v-else>
                        <button type="button" @click="login">ログイン</button>
                    </div>


                    <router-view />
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNavi from './components/LeftNavi.vue'
import H1 from './components/H1.vue'
//import firebase from 'firebase'

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
    created: function() {
        // TODO: 認証追加するそれまではfirebaseのアクセスルールで制限しておく
        console.log('created');
    },
    mounted: function() {
        console.log('mounted');
    },
    methods: {
        login: function(){
            console.log('login');
        },
        logout: function(){
            console.log('logout');
        }
    }
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
