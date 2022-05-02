<template>
  <div>
      <button @click="fun2()">map</button>
      <p>{{user}}</p>
  </div>
</template>

<script>
export default {
    name:"QuE10",
    data(){
        return{
            user:" ",
             users:[ 
            { id:20,name: 'Captain Piett' },
            { id:24,name:'General Veers' }, 
            { id:56,name:'Admiral Ozzel' }, 
            { id:88,name:'Commander Jerjerrod'},
            ],
        }
    },
    methods:{
        fun2(){
    this.user= this.users.map(j=>{return j.id})
        }
        
    }

}
</script>

<style>

</style>