<template>
  <div>
      string1:<input type="text" v-model="String1"><br/>
      string2:<input type="text" v-model="String2">
  </div>
</template>

<script>
export default {
    name:"AsgQ",
    data(){
        return{
            String1:"",
            String2:""
        }
    },
    watch:{
        String1:function(row){
            this.String1=row;
            this.String2=this.String1.toUpperCase();
        }
    }

    

}
</script>

<style>

</style>