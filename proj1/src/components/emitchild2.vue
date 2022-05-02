<template>
  <div>
      <button @click="sample2()"> sample2click</button> 
  </div>
</template>

<script>
export default {
    name:"EmitEvent1",
    components:{},
    data(){
        return{
            fields:['id','name','dept'],
            items:[{id:'1161',name:'anusha', dept:'dev'},
                     {id:'1162',name:'rama',dept:'dev'},
                     {id:'1163',name:'harika',dept:'dev'},
                     {id:'1164',name:'nithya',dept:'dev'},
                     ],
        }
    },
    
    methods:{
                   sample2(){
                    this.$emit("check")
                    console.log("child2")
        
        }
    }
}
</script>
<style>
</style>