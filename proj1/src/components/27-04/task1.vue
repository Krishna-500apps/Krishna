<template>
  <div>
      <button @click="fun1()">click</button>
      <b-form-input v-model="value" placeholder="Enter your country name"></b-form-input> 
      <b-table striped hover :items="post" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
    name:"TasK1",
    data(){
        return{
            post:"",
            fields:["name","web_pages","state-province"]
        }
    },
    methods:{
        async fun1(){
            const res=await fetch("http://universities.hipolabs.com/search?country="+this.value)
            this.post=await res.json()

        }
    },
    created(){
        this.fun1()(this.post)
    }

}
</script>

<style>

</style>