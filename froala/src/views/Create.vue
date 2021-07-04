<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">title</label>
                <input type="email" class="form-control" id="title" v-model="title">
            </div>
            <div class="mb-3">
                <label class="form-label">contents</label>
                <froala :tag="'textarea'" :config="config" v-model="contents"></froala>
            </div>
            <button type="button" class="btn btn-primary" @click="send()">send</button>
        </form>

        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2>view</h2>
        </div>
        <froalaView v-model="contents"></froalaView>
    </div>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'
import VueFroala from 'vue-froala-wysiwyg'
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/languages/ja.js";
Vue.use(VueFroala)

export default {
    name: 'Create',
    data () {
        return {
            db: {},
            config: {
                language: 'ja',
                events: {
                    'froalaEditor.initialized': function () {
                    }
                }
            },
            id: '',
            docRef: {},
            title: '',
            contents: '',
            created: '',
        }
    },
    created: function(){
        this.id = this.$route.params.id;
        this.db = firebase.firestore();
        if (this.id) {
            var self = this;
            this.docRef = this.db.collection("articles").doc(this.id);
            this.docRef.get().then((doc) => {
                self.title = doc.get('title');
                self.contents = doc.get('contents');
                self.created = doc.get('created');
            }).catch((error) => {
                alert("Error getting document:" + error);
            });
        }
    },
    methods: {
        send: function(){
            var self = this;
            if (!self.id) {
                self.db.collection("articles").add({
                    title: self.title,
                    contents: self.contents,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    updated: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then((docRef) => {
                    self.id = docRef.id;
                    self.docRef = docRef;
                    console.log("success create");
                })
                .catch((error) => {
                    alert("Error adding document: " + error);
                });
            } else {
                self.docRef.update({
                    title: self.title,
                    contents: self.contents,
                    updated: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(() => {
                    console.log("success edit");
                })
                .catch((error) => {
                    alert("Error writing document: " + error);
                });
            }
        }
    }
}
</script>
