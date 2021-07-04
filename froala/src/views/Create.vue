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
            docRef: {},
            title: '',
            contents: 'Edit Your Content Here!',
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
            var timestamp = firebase.firestore.FieldValue.serverTimestamp();
            var self = this;
            if (!self.id) {
                self.db.collection("articles").add({
                    title: "hello world",
                    contents: self.contents,
                    created: timestamp,
                    updated: timestamp,
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
                self.docRef.set({
                    title: "edit",
                    contents: self.contents,
                    updated: timestamp,
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
