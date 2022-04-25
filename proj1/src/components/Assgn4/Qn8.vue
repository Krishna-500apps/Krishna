<template>
  <div>
      <h4>filter the data</h4>
      <button @click="fun1()">filter</button>
  </div>
</template>

<script>
export default {
    name:"QN8",
    data(){
        return{
             officers:[
                          { id: 20, name: 'Captain Piett' },
                          { id: 24, name: 'General Veers' },
                          { id: 56,name: 'Admiral Ozzel' },
                          { id: 88, name: 'Commander Jerjerrod'},
                ],
        }
    },
    methods:{
        fun1(){
            var officers=this.officers.filter((officers)=>{
                return officers.name==("General Veers")
            });
            console.log(officers)
        }
    }

}
</script>

<style>

</style>