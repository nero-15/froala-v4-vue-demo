<template>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <router-link to="/" class="navbar-brand col-md-3 col-lg-2 me-0 px-3">froala v4</router-link>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="javascript:void(0);" @click="logout()">Sign out</a>
            </li>
        </ul>
    </header>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Header',
    props: {
    },
    methods: {
        logout: function() {
            firebase.auth().signOut();
        }
    }
}
</script>
