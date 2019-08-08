<template>
    <div>
        <h3>User</h3>
        <button @click="getUsers()" class="button">Get Users</button>
        <!-- <pre>{{ users }}</pre> -->
        <!-- <p v-for="each in users" :key="each.id">{{ each.name }}</p> -->
        <table class="table">
            <!-- <tr v-for="each in users" :key="each.id">
                <td><RouterLink :to="'/user/' + each.id">{{ each.name }}</RouterLink></td>
                <td>{{ each.username }}</td>
                <td>{{ each.email }}</td>
            </tr> -->
            <UserListItem v-for="each in users" :key="each.id" :user="each" />
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import UserListItem from '@/components/UserListItem.vue'
const url = 'https://jsonplaceholder.typicode.com/users'
export default {
    components : {
        UserListItem
    },
    data(){
        return {
            users:[]
        }
    },
    methods:{
        getUsers(){
            axios.get(url)
                .then(res => {
                    this.users = res.data
                    // console.log(res.data)
                }
            )
        }
    }

}
</script>
