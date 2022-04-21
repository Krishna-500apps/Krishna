<template>
  <div>
      <h2>fullname</h2>
      <button @click="concatanation">fullname</button>
  </div>
</template>

<script>
export default {
        name:"QuE5",
      data(){  
          return{
              firstname:"Mantra",
              secondname:"technologies"
          }
    },
    methods:{
        concatanation(){
            var concatanation=this.firstname+""+this.secondname;
            document.write(concatanation);
        }

    }

}
</script>

<style>

</style>