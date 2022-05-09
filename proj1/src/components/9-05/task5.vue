<template>
  <div>
      <h3>fetching data</h3>
      <b-tabs>
      <b-tab title="tab-1" @click="fun1()"></b-tab>
        <b-table striped hover :items="res" fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
      </b-tabs>
  </div>
</template>

<script>
export default {
    name:"FetCh",
    data(){
        return{
            perPage: 3,
        currentPage: 1,
            res:"",
            fields:['id','tittle','completed']
        }
    },
    methods:{
        async fun1(){
            let response=await fetch("https://jsonplaceholder.typicode.com/todos")
            this.res=await response.json()
        }

    },
     computed: {
      rows() {
        return this.res.length
      }
    }
    
    
    
    

}
</script>

<style>

</style>