<template>
  <div>
      <button @click="fun3()">click</button>
      <b-form-input v-model="value" placeholder="Enter your country name"></b-form-input>
      <b-table striped hover :items="post" :fields="fields"></b-table>
  </div>
</template>

<script>
const axios=require('axios').default;
export default {
    name:"TasK3",
    data(){
        return{
            post:"",
           // fields:["name","web_pages","state-province"]
        }
    },
    methods:{
        async fun3(){
            let response=await axios.get("http://universities.hipolabs.com/search?country=")
            console.log(response)
        }
    },
    mounted(){
        console.log(this.post)

    }


}
</script>

<style>

</style>