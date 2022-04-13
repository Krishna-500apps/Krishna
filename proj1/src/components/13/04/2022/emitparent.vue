<template>
  <div>
      <b-table :items="items" :fields="fields"/>
      <emitchild @check="f1()"></emitchild>

  </div>
</template>

<script>
import emitchild  from'../components/emitchild.vue'
export default {
    name:"EmiT",
    components:{ 
        emitchild,
    },
    data(){
        return{
            fields:['id','name','dept'],
            items:[
                {id:'1175',name:'sai',dept:'developer'},
                    {id:'1176',name:'venkat',dept:'developer'},
                    {id:'1177',name:'mahesh',dept:'developer'},
                    {id:'1178',name:'krishna',dept:'developer'},
                    ],

            }
        },
        methods:
            {
                f1(){
                    console.log("sample check emit");
                }
    }

}
</script>

<style>

</style>