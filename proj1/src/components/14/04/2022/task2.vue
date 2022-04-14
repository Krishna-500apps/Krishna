<template>
  <div>
   <h2>JavaScript Validation</h2>
<button @click="f1()">Submit</button>
      </div>
</template>

<script>
export default {
    name:'taSK2',
    data(){
        return{
            c:[55,56,35,65,66,55]
        }
    },
    methods:{
        f1(){
            for(var i=0;i<this.c.length;i++){
                if(this.c[1]==56)
                this.c[1] = 8
            }
            console.log(this.c)
        }

    }
    }
</script>

<style>

</style>