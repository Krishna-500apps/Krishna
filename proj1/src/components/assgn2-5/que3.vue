<template>
  <div>
      <h4>unique values</h4>
      <button @click="fun3()">click</button>


  </div>
</template>

<script>

export default {
    name:"QuE3",
    data(){
        return{
        
         array:[1,1,2,2,2,3,4,3,2]

        }
    },
    methods:{
       fun3(){
          var unique = this.array.filter((v, i, a) => a.indexOf(v) === i);
             console.log(unique); 
       }
    }
           
}
   

</script>

<style>

</style>