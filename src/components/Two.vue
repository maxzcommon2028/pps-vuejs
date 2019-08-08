<template>
    <div class="box">
        <h1 class="title">Two : {{ foo }}</h1>
    </div>
</template>

<script>
export default {
  props:{
    foo:{
      default:20,
      //required : true, //ต้องมีข้อมูล
      type: Number //ต้องเป็น Number
    }
  },
  data(){
    return {}
  }
}
</script>
