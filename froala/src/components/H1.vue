<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">{{ h1 }}</h1>
    </div>
</template>

<script>
export default {
    name: 'H1',
    props: {
        h1: String
    }
}
</script>
