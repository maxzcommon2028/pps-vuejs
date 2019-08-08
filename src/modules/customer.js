const customer =  {
    namespaced: true,  // ถ้าเป็น true เวลาเรียกใช้ ต้องเรียกชื่อ module นำหน้า
    mutations:{
        foo(){  //cutomer/foo
            console.log('customer: foo()')
        }
    }
}

export default customer