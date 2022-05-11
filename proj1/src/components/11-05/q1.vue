<template>
  <div>
      <button @click="f1()">click</button>
{{res}}
  </div>
</template>

<script>
export default {
    name:"QN1",
    data(){
        return{
            s1:"krishna",
            res:""
        }
    },
    methods:{
        f1(){
            this.res=typeof this.s1
        }
    }

}
</script>

<style>

</style>