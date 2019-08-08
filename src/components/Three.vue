<template>
    <div>
        <h1 class="title">{{ now }}</h1>
        <slot :now="now">Default Content</slot>
    </div>
</template>

<script>
export default {
  computed:{
    now(){
      return new Date()
    } 
  }
}
</script>
