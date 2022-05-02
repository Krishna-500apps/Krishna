<template>
  <div>
      <button @click="sample()">sample click</button>
  </div>
</template>

<script>
export default {
    name:"EmitEvent",
    components:{} ,
    data(){
        return{
            fields:['id','name','dept'],
            items:[{id:'1175',name:'sai',dept:'developer'},
                    {id:'1176',name:'venkat',dept:'developer'},
                    {id:'1177',name:'mahesh',dept:'developer'},
                    {id:'1178',name:'krishna',dept:'developer'},
                    ],
            
        }
    },
     methods:{
                   sample(){
                       this.$emit("check")
                       console.log("child")
                   }

               }

}
</script>

