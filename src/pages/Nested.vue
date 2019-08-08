<template>
    <div class="box">
        <h1 class="title">Nested : {{ counter }}</h1>
        <!-- <p>
            <button @click="counter+=1" class="button">Update</button>
        </p>
        <One :doubleCounter="counter*2" /> -->
        <Three v-slot="xxx">
            <p>Current Time</p>
            <hr/>
            <p>{{ xxx.now }}</p>
        </Three>
        <!-- <pre v-if="!$store.state.waiting">{{ $store.state.users }}</pre> -->
    </div>
</template>

<script>
import One from '@/components/One.vue'
import Three from '@/components/Three.vue'
export default {
    watch:{
        counter(){
            console.log('OK')
        }
    },
    components:{
        One,
        Three
    },
    data(){
        return {
            counter: 1
        }
    }
}
</script>

