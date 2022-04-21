<template>
  <div>
      <input name="myform" method="post" onsubmit="fun1()">
      <inpt type="text" name="words" placeholder="Entertext">
          <button @click="fun1()">serch</button>

  </div>
</template>

<script>
export default {
    name:"SearchFunction",
    data(){
        return{
            array:["agile","crm","mantra","technologies","500apps","infinity"],
             res:"",
        }
    },
    methods:{
        fun1(){ 
            var res=this.array.map(j=>{
                return j.name
            })
            console.log(row);
            
            
            

            
        }

    }
    
    

}
</script>

<style>

</style>