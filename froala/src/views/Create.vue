<template>
    <div>
        <h2>Section title</h2>
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
        <button @click="send()">send</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Create',
    data () {
        return {
            db: {},
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
    created: function(){
        this.db = firebase.firestore();
        console.log(this.db);
    },
    methods: {
        send: function(){
            console.log('send');
        }
    }
}
</script>
