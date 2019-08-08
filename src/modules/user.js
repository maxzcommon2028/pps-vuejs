const user =  {
    state:{
        users: [1,2,3,4,]
    },
    getters:{
        userCount(state){
            return state.users.length
        }
    },
    mutations:{
        foo(){ //foo
            console.log('user: foo()')
        }
    }
}

export default user