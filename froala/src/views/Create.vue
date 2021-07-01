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
<<<<<<< HEAD
    created: function(){
        this.db = firebase.firestore();
    },
=======
>>>>>>> main
    methods: {
        send: function(){
            this.db.collection("articles").add({
                title: "hello world",
                contents: this.model,
                created: "2021-07-01 22:39:00"
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    }
}
</script>
