<template>
  <div>
      <button @click="fun4()">search</button>
      <input type="text" v-model="search" placeholder="enter the text">
  </div>
</template>

<script>
export default {
    name:"QuE4",
    data(){
        return{
             list : [ 'orange', 'red', 'blue', 'black', 'white' ],
             search:"",
        }
    },
    methods:{
        fun4(){
           var lists=this.list.filter((row)=>{
               return row.includes(this.search)
           })
           document.write(lists)

        
        
        }
         
        
    }

}
</script>

<style>

</style>