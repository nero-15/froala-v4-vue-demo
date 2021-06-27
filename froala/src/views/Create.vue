<template>
    <div>
        <h2>Section title</h2>
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
        <button @click="send()">send</button>
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
    },
    methods: {
        send: function(){
            console.log('send');
        }
    }
}
</script>
