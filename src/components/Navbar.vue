<template>
    <div>
        <h1 class="title">Navbar</h1>
        <RouterLink to="/">One</RouterLink>{{ ' | ' }}
        <router-link to="/about">Two</router-link>{{ ' | ' }}
        <router-link to="/user">User</router-link>{{ ' | ' }}
        <router-link to="/form">Form</router-link>{{ ' | ' }}
        <router-link to="/nested">Nested</router-link>{{ ' | ' }}
        <router-link to="/vuex">Vuex</router-link> {{ ' | ' }}
        <!-- User: {{ $store.getters.userCount }} -->
    </div>
</template>