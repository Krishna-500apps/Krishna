<template>
  <div>
       <h3>crudoperations</h3>
      <b-table items="names" :fields="fields"></b-table>
      <b-form input type="text" id="id1" place holder="Enter firstname"></b-form>
      <b-form input type="text" id="id2" placeholder="Enter secondname"></b-form>
      <button @click="add()">concatination</button>
    <!-- <button @click="delete()">delete</button>-->

          
</template>

<script>
export default {
    name:"QuE3",
    data(){
        return{
            names:[{firstname:"agile",secondname:"crm"}]
        }
    },
    methods:{
        add(){
            this.names.push({firstname:(document.getElementId("id1").value),
             secondname:(document.getElementId("id2").value)})
        }
    }
}
</script>

<style>

</style>