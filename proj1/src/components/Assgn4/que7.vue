<template>
  <div>
      <h5>find</h5>
      <button @click="fun7()">find</button>
      <p>the index of id(88):{{result}}</p>
  </div>
</template>

<script>
export default {
    name:"quE7",
    data(){
        return{
             users:[
                    { id: 20, name: 'Captain Piett' },
                    { id: 24, name: 'General Veers' },
                    { id: 56, name:'Admiral Ozzel' },
                    { id: 88, name: 'Commander Jerjerrod'},
                    
             ],
             result:" "     
        }
    },
    methods:{
        fun7(){
           this.result=this.users.findIndex(user=>user.id==88)
              return this.result
        }
    }

}
</script>

<style>

</style>