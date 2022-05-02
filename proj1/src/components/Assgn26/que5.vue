<template>
<div>
  <h4>que5</h4>
  <b-card>
  <button @click="fun5()">click</button>
  <button @click="fun5()">click</button>
  <b-form-input v-model="value" placeholder="Enter your country name"></b-form-input>
  <b-table striped hover :items="posts" :fields="fields"></b-table>
  </b-card>
</div>
</template>

<script>
//const axios=require('axios').default;
export default {
    name:"QuE5",
    data(){
        return{
      posts:" " ,
          fields:["name","web_pages","state-province"]
        }
    },
    methods:{
       async fun5(){
            let response=await fetch("http://universities.hipolabs.com/search?country="+this.value)
            this.posts=await response.json()
           
        }
    },
    created(){
    this.fun5()(this.posts);
    },
    
    //     async fun55(){
    //         let response=await axios.get("http://universities.hipolabs.com/search?country=")
    //         console.log(response)

    //     },

    //  mounted(){
    //  console.log(this.fun55())
    // }

 }
</script>

<style>

</style>