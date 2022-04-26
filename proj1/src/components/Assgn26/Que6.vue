<template>
  <div>
      <button @click="fun6()">dropdown</button>
      <b-form-input v-model="value" placeholder="Enter your country name"></b-form-input>
  <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
    name:"QuE6",
    data(){
        return{
            posts:" " ,
          fields:["urls"]
  
        }
    },
    methods:{
       async fun6(){
            let response=await fetch("https://agilecrm.com")
            this.posts=await response.json()
           
        }
    },
    created(){
    this.fun6()(this.posts);
    },
        }
    


</script>

<style>

</style>