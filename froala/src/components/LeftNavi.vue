<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page">
                        <span data-feather="home"></span>
                        TOP
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link">
                        <span data-feather="file"></span>
                        Create
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'LeftNavi',
    props: {
    }
}
</script>
