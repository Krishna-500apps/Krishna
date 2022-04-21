<template>
<div>
    <h4>Even or odd</h4>
    <button type="submit" @click="normal(2)">normalfun</button>
    <button type="submit" @click="arrow(5)">arrowfun</button>
</div>
  
</template>

<script>
export default {
    name:"QUe7",
    data(){
        return{};
    },
    methods:{
        normal(a){
           if(a % 2==0){
               console.log("Evennumber");
           }else{
               console.log("Oddnumber")
           }
        },
        arrow:(a)=>{
            if(a % 2==0){
                console.log("Evennumber");
            }else{
               console.log("Oddnumber")
            }
        }
        
    }

}
</script>

<style>

</style>