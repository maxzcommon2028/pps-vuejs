import Vue from 'vue'
import Vuex from 'vuex'

// import actionGetUsers from '@/actions/get-users' // กรณีที่ ในไฟล์ export ออกมาค่าเดียว 
import { actionGetUsers } from '@/actions/get-users' // กรณีที่ ในไฟล์ export ออกมาหลายค่า


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        users: [],
        waiting: false
    },
    getters:{
        userCount(state){
            return state.users.length
        }
    },
    mutations:{
        mutateUsers(state, param){
            state.users = param
        },
        mutateWaiting(state, param){
            state.waiting = param
        }

    },
    actions:{
        actionGetUsers
    }
})

export default store