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
                    <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
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
            articles: {},
        }
    },
    created: function(){
        this.db = firebase.firestore();
        this.db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    },
}
</script>
