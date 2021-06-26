<template>
    <div id="app">
        <Header/>
        <div class="container-fluid">
            <div class="row">
                <LeftNavi></LeftNavi>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <H1 h1="Dashboard"/>
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

export default {
    name: 'App',
    components: {
        Header,
        LeftNavi,
        H1,
    },
    data () {
        return {
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
