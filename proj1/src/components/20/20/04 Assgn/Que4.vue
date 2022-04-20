<template>
  <div>
      <h3>fetch api</h3>
      <button @click="getData()">click</button>
       <b-form-input v-model="value" placeholder=" Enter your company name"></b-form-input>
      <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>

<script> 
export default {
name:"QUe4",
data(){
    return{
    posts:" ",
        fields:["name","email"]
    }
},
methods:{
async getData(){

  let response=await fetch("http://www.json-generator.com/api/json/get/bSldINskRK=" +this.value)
this.posts=await response.json()
}
},
created(){
    this.getData();
}
}
</script>
