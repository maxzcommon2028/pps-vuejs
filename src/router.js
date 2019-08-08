import Vue from 'vue'
import VueRouter from 'vue-router'

// import One from '@/components/One'
// import Two from '@/components/Two'
// import Three from '@/components/Three'
// import User from '@/pages/User'
// import UserProfile from '@/pages/UserProfile'
// import PersonForm from '@/components/PersonForm'

const One = () => import('@/components/One' /* webpackChunkName: 'One' */)
const Two = () => import('@/components/Two' /* webpackChunkName: 'Two' */)
const Three = () => import('@/components/Three' /* webpackChunkName: 'Three' */)
const User = () => import('@/pages/User' /* webpackChunkName: 'User' */)
const UserProfile = () => import('@/pages/UserProfile' /* webpackChunkName: 'UserProfile' */)
const PersonForm = () => import('@/components/PersonForm' /* webpackChunkName: 'form' */)
const Nested = () => import('@/pages/Nested' /* webpackChunkName: 'Nested' */)
const Vuex = () => import('@/pages/Vuex' /* webpackChunkName: 'Vuex' */)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: One },
    { path: '/about', component: Two },
    { path: '/three', component: Three },
    { path: '/user', component: User },
    { path: '/user/:id', component: UserProfile },
    { path: '/form', component: PersonForm },
    { path: '/nested', component: Nested },
    { path: '/vuex', component: Vuex }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router