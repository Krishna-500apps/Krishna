<template>
  <div>
      <b-tabs>
          
          <b-tab title="tab-1" @click="fun2()"></b-tab>
          <b-table striped hover :items="inf" fields="fields"></b-table>
          
      </b-tabs>
  </div>
</template>

<script>
export default {
    name:"TasK6",
    data(){
        return{
              fields:['id','tittle','completed'],
            inf:""
        }
    },
    methods:{
        async fun2(){
            let data=await fetch("https://jsonplaceholder.typicode.com/todos")
            this.inf=await data.json()
        }
    }

}
</script>

<style>

</style>