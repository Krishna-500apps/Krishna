<template>
  <div>
      <h2>handle errors</h2>
      <button @click="handle()">click</button>
  </div>
</template>

<script>
export default {
    name:"QUe10",
    data(){
        return{

        }
    },
    methods:{
        handle(){
            try{
                this.out=this.count*5;
                document.write("printing count",this.count);
            }catch{
                document.write("count");
            }
        }

    }

}
</script>

<style>

</style>