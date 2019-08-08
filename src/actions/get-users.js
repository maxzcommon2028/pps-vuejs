import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'
const actionGetUsers = async (context) => {
    try{
        context.commit('mutateWaiting', true)
        const res = await axios.get(url)

        context.commit('mutateUsers', res.data)
        context.commit('mutateWaiting', false)
    } catch(error){
        context.commit('mutateUsers', [])
        context.commit('mutateWaiting', false)
    }
}

export  { actionGetUsers }
// export  default actionGetUsers // กรณี export ฟังก์ชั่นเดียว

/** ตัวอย่าง การเขียนฟังก์ชั่นภายใน stored.js/actions โดยตรง ถ้าแยกไฟล์ต้องปรับการเขียนแบบด้านบน */
// async actionGetUsers(context){
//     try{
//         context.commit('mutateWaiting', true)
//         const res = await axios.get(url)
//         context.commit('mutateUsers', res.data)
//         context.commit('mutateWaiting', false)
//     } catch(error){
//         context.commit('mutateUsers', [])
//         context.commit('mutateWaiting', false)
//     }
// }