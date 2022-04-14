<template>
  <div>
    <button @click="sample1()"> click</button>
  </div>
</template>

<script>
export default {
    name:'TasK1',
    data(){
        return{
            a:[33,45,66,70,87,96,],
        }
    },
    methods:{
        sample1(){
            for(var i=0;i<this.a.length;i++){
                if(this.a[0]==33){
                    this.a[0]=55
                    console.log(this.a)
                    
                }
            }
        }
    }

}
</script>

<style>

</style>