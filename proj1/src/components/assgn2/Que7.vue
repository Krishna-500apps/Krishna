<template>
  <div>
      <button @click="fun2()">find</button>
  </div>
</template>

<script>
export default {
    name:"QuE7",
    data(){
        return{
             users:[ { id: 20, name: 'Captain Piett' },
             {id:24, name: 'General Veers' },
             {id:56, name:'Admiral Ozzel' },
             {id:88, name: 'Commander Jerjerrod' },
              ],
        }
    },
    methods:{
        fun2(){
            this.users = this.users.map(j=>{return j.id})
            console.log()
            

        
        }
    
    }

}
</script>

<style>

</style>