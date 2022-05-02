<template>
  <div>
      <h3>using axios</h3>
      <button @click="fun2()">click</button>
  </div>
</template>

<script>
const axios=require('axios').default;
export default {
    name:'AxioS',
    data(){
        return{
            post:"",

        }
    },
    methods:{
        async fun2(){
            let response=await axios.get("http://universities.hipolabs.com/search?country=")
            console.log(response)

        }
    },
    mounted(){
    console.log(this.posts)
    }



}
</script>

<style>

</style>