<template>
    <div>
        <h3>User Profile  {{ $route.params.id }}</h3>
        <pre>{{ user }}</pre>
        <!-- <button @click="getUsers()" class="button">Get Users</button> -->
    </div>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'
export default {
  data(){
    return {
        user:{}
    }
  },
  methods:{
      getUser(id){
        axios.get(url+'/'+id)
            .then(res => {
                this.user = res.data
                // console.log(res.data)
            }
        )
      }
  },
  mounted(){
      this.getUser(this.$route.params.id)
  }

}
</script>
