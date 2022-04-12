<template>
  <div>
      <h1>router</h1>
      <button @click='f1()'>click</button>
  </div>
</template>

<script>
export default {
    name:'ROut1',
    data(){
        return{
            a:[3,4,6,7,8,9]

        }

    }, 
    methods:{
        f1(){
            for(var i=0;i<this.a.length;i++){
                if(this.a[3]==9){
                this.a[3]=9
                    document.write(this.a)
                }
            }
        }
    }

}
</script>

<style>

</style>