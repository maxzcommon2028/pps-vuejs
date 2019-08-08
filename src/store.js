import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/modules/user'
import customer from '@/modules/customer'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        customer
    }
})

export default store