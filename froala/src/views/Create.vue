<template>
    <div>
        <h2>Section title</h2>
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
        <button @click="send()">send</button>
    </div>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'
import VueFroala from 'vue-froala-wysiwyg'
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
Vue.use(VueFroala)

export default {
    name: 'Create',
    data () {
        return {
            db: {},
            config: {
                events: {
                    'froalaEditor.initialized': function () {
                    }
                }
            },
            model: 'Edit Your Content Here!',
        }
    },
    created: function(){
        this.db = firebase.firestore();
    },
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
