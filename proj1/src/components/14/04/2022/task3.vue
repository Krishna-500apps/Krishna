<template>
  <div>    

<button @click='f3()'>enter</button>
  </div>
</template>

<script>
export default {
    name:"rouTEr",
    components:{},
    data(){
        return{
            fields:['id','name','dept'],
            items:[{id:'1101',name:'harika',dept:'manager'},
                   {id:'1102',name:'kumar',dept:'director'},
                   {id:'1103',name:'venky',dept:'sales'},
                   {id:'1104',name:'suma',dept:'cto'},
                   ],
        }
    },
    methods:{
        f3(){
       console.log(this.items);
        }
    }

}
</script>

<style>

</style>