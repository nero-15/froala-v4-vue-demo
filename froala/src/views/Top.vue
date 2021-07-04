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
                        <th>updated</th>
                        <th>detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in articles" :key="article.id">
                        <td>{{ article.id }}</td>
                        <td>{{ article.title }}</td>
                        <td>{{ article.created }}</td>
                        <td>{{ article.updated }}</td>
                        <td>
                            <router-link :to="'/article/' + article.id" class="stretched-link">detail page</router-link>
                        </td>
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
                    title: doc.get('title'),
                    created: doc.get('created'),
                    updated: doc.get('updated')
                }
                self.articles.push(article);
            });
        });
    },
}
</script>
