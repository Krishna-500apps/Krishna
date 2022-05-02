<template>
  <div>
      <b-table :items="items" :fields="fields"/>
      <emitchild2 @check="f3()"></emitchild2>
  </div>
</template>

<script>
import emitchild2 from'./emitchild2.vue'
export default {
    name:"EmiT2",
    components:{
        emitchild2,
    },
    data(){
        return{
            fields:['id','name','dept'],
            items:[
                {id:'1161',name:'lakshmi', dept:'dev'},
                     {id:'1162',name:'navya',dept:'dev'},
                     {id:'1163',name:'aziya',dept:'dev'},
                     {id:'1164',name:'sukanya',dept:'dev'},
            ],
        }
    },
    methods:
       {
           f3(){
               console.log("sample check emit");
           }
       }


    
    
    

}
</script>

<style>

</style>