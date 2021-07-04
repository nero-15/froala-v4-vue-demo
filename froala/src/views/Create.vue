<template>
    <div>
        <froala :tag="'textarea'" :config="config" v-model="contents"></froala>
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
            id: '',
            article: {},
            docRef: {},
            title: '',
            contents: 'Edit Your Content Here!',
        }
    },
    created: function(){
        this.id = this.$route.params.id;
        this.db = firebase.firestore();
        if (this.id) {
            var self = this;
            this.docRef = this.db.collection("articles").doc(this.id);
            this.docRef.get().then((doc) => {
                self.article = doc;
                self.title = doc.get('title');
                self.contents = doc.get('contents');
            }).catch((error) => {
                alert("Error getting document:" + error);
            });
        }
    },
    methods: {
        send: function(){
            var date = new Date();
            var now = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            var self = this;
            if (!self.id) {
                self.db.collection("articles").add({
                    title: "hello world",
                    contents: self.contents,
                    created: now,
                    updated: now,
                })
                .then((docRef) => {
                    self.id = docRef.id;
                    self.docRef = docRef;
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    alert("Error adding document: " + error);
                });
            } else {
                self.docRef.set({
                    title: "edit",
                    contents: self.contents,
                    updated: now,
                })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            }
        }
    }
}
</script>
