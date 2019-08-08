<template>
    <div class="box">
        <h1 class="title">Nested : {{ counter }}</h1>
        <p>
            <button @click="counter+=1" class="button">Update</button>
        </p>
        <One :doubleCounter="counter*2" />
    </div>
</template>

<script>
import One from '@/components/One.vue'
export default {
    watch:{
        counter(){
            console.log('OK')
        }
    },
    components:{
        One
    },
    data(){
        return {
            counter: 1
        }
    }
}
</script>

