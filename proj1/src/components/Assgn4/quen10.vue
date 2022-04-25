<template>
  <div>
      <h4> Es6 </h4>
      <button @click="fun10()">map</button>
      <p>{{user}}</p>
  </div>
</template>

<script>
export default {
    name:"quEN10",
    data(){
        return{
            user:" ",
            users:[
                 { id: 20, name: 'Captain Piett' },
                 { id: 24, name: 'General Veers' },
                 { id: 56, name:'Admiral Ozzel' },
                 { id: 88, name: 'Commander Jerjerrod'},
                ],
        }
    },
    methods:{
        fun10(){
            this.user=this.users.map(j=>{return j.id})
        }
    }

}
</script>

<style>

</style>