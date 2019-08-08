<template>
    <div>
        <h1 class="title">Vuex</h1>
        <!-- <button @click="$store.dispatch('actionGetUsers')" class="button">Get Users</button>
        <p v-if="$store.state.waiting">Please Wait</p>
        <pre v-if="!$store.state.waiting">{{ $store.state.users }}</pre> -->
        <pre>{{ $store.state.user.users }}</pre>
        <p>Count: {{ $store.getters.userCount }}</p>
        <button @click="$store.commit('foo')" class="button">foo Global</button>
        <button @click="$store.commit('customer/foo')" class="button">Customer/foo</button>

    </div>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'

export default {
}
</script>


