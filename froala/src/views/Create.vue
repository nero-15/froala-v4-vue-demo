<template>
    <div>
        <h2>Section title</h2>
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
    </div>
</template>

<script>
export default {
    name: 'Create',
    data () {
        return {
            config: {
                events: {
                    'froalaEditor.initialized': function () {
                        console.log('initialized')
                    }
                }
            },
            model: 'Edit Your Content Here!',
        }
    },
    mounted: function(){

    }
}
</script>
