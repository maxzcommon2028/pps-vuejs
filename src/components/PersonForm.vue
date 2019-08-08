<template>
    <div>
        <h1 class="title">Person Form</h1>
        <div class="field">
            <input v-validate="'required|min:3'" v-model="person.firstName" name="firstName" type="text" :class="className('firstName')" />
            <p class="help is-danger">{{ errors.first('firstName')}}</p>
            
        </div>

        <div class="field">
            <input v-validate="'required'" v-model="person.lastName" name="lastName" type="text" :class="className('lastName')" />
            <p class="help is-danger">{{ errors.first('lastName')}}</p>
        </div>

        <pre>{{ errors }}</pre>
    </div>
</template>

<script>
export default {
    methods:{
        className(field){
            return this.errors.has(field) ? 'input is-danger animated flash ' : 'input'
        }
    },
    data(){
        return{
            person:{}
        }
    }
}
</script>

