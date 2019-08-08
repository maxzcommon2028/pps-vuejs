<template>
    <div class="box">
        <h3 class="title">One: {{ doubleCounter }}</h3>
        <Two :doubleCounter="doubleCounter*2" />
    </div>
</template>

<script>
import Two from '@/components/Two.vue'
export default {
  components:{
    Two
  },
  props: ['doubleCounter']
}
</script>
