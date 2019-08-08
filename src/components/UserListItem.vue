<template>
    <tr >
        <td><RouterLink :to="'/user/' + user.id">{{ user.name }}</RouterLink></td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.website }}</td>
        <td>{{ counter }}</td>
        <td>{{ xxx }}</td>
    </tr>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        user:{
            required:true
        }
    },
    computed:{
        ...mapState(['counter', 'foo']),
        xxx(){
           return this.counter*2
        }
        // counter(){
        //     return this.$store.state.counter
        // }        
    }
}
</script>
