<template>
  <div>
      <h3>callback</h3>
      <button @click="sum()"> result </button>

  </div>
</template>

<script>
export default {
    name:"CAllback",
    data(){
        return{
            result:this.mycalculator(4,5,this.mydisplayer),
    
        };
    },
    methods:{
        mydisplayer:(something)=>{document.write(something);
        },
        mycalculator:(arg1,arg2,arg3)=>{
            let sum=arg1+arg2;
            arg3(sum);
        }
   
    }   
}


    
</script>

<style>

</style>