<template>
  <div>
      <input name="myform" method="post" onsubmit="fun1()">
      <inpt type="text" name="words" placeholder="Entertext">
          <button @click="fun1()">serch</button>

  </div>
</template>

<script>
export default {
    data(){
        return{
           // post:"",
           words:"gi",
            array:["agile","crm","mantra","technologies","500apps","infinity"]


           
        }
    },
    methods:{
        fun1(){
            
            

            
        }

    }
    
    

}
</script>

<style>

</style>