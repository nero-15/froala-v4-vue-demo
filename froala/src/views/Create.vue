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
            title: '',
            contents: 'Edit Your Content Here!',
        }
    },
    created: function(){
        this.id = this.$route.params.id;
        this.db = firebase.firestore();
        if (this.id) {
            var self = this;
            var docRef = this.db.collection("articles").doc(this.id);
            docRef.get().then((doc) => {
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
            if (!this.id) {
                this.db.collection("articles").add({
                    title: "hello world",
                    contents: this.contents,
                    created: date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    alert("Error adding document: " + error);
                });
            } else {// TODO: 編集
                console.log('aaa');
            }
        }
    }
}
</script>
