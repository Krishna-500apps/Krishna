<template>
  <div>
      <button @click="fun4">click</button>

  </div>
</template>

<script>
const axios=require('axios').default;
export default {
    name:"TasK4",
    data(){
        return{
            post:"",

        }
    },
    methods:{
        async fun4(){
           const res=await axios.post("http://universities.hipolabs.com/search?country=",{
           name:"krishna",
        })
        console.log(res)
        }
    
    },
    mounted(){
           this.fun4()(this.post)
    }
    

}
</script>

<style>

</style>