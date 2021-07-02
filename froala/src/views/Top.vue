<template>
    <div>
        <h2>articles</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>created</th>
                        <th>detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in articles" :key="article.id">
                        <td>{{ article.id }}</td>
                        <td>{{ article.title }}</td>
                        <td>{{ article.created }}</td>
                        <td>link</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Top',
    data () {
        return {
            db: {},
            articles: [],
        }
    },
    created: function(){
        this.db = firebase.firestore();
        var self = this;
        this.db.collection("articles").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var article = {
                    id: doc.id,
                    title: doc.data().title,
                    created: doc.data().created,
                }
                self.articles.push(article);
            });
        });
    },
}
</script>
