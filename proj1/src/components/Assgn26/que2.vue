<template>
  <div>
     1st number:<input type="text" id="firstnumber">
     2nd number:<input type="text" id="secondnumber">
      <button @click="multiple()">multiple</button>
      <button @click="divide()">divide</button>
 </div>
</template>

<script>
export default {
    name:"QuE2",
    //result:" ",
    data(){
        return{

        }

    },
    methods:{
        multiple(){

          let a=document.getElementById("firstnumber").value;
          let b=document.getElementById("secondnumber").value;
          let result= a * b;
          document.write(result)
    },
    divide(){
       let a=document.getElementById("firstnumber").value;
       let b=document.getElementById("secondnumber").value;
       let result= a/b;
       document.write(result)
    }
    
   
   
    }


}
</script>

<style>

</style>