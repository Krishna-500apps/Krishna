<template>
  <div>
<button @click="f4()">comparing strings</button>
<p>{{ str1 }}</p>
<p>{{ str2 }}</p>
<p>{{ result }}</p>

  </div>
</template>

<script>
export default {
    name:"QN4",
    data(){
        return{
            str1:"File",
            str2:"Life",
            result:""
        }
    },
    methods:{
        f4(){
       this.result=this.str1.length===this.str2.length && this.str1.split(this.str1).sort().join() == this.str2.split(this.str2).sort().join(); 
       console.log(this.result)
        }
    
   }
    


}
</script>

<style>

</style>