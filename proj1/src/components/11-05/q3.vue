<template>
  <div>
      <button @click="dupremove()">dupremove</button>
      <p>{{array}}</p>
  </div>
</template>

<script>
export default {
    name:"QN3",
    data(){
        return{
            array:[1,3,5,9,3,9,0]
        }
    },
    methods:{
        dupremove(){
            this.array=[...new Set(this.array)]
        }
    }

}
</script>

<style>

</style>