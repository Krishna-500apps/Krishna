<template>
  <div>
      <h5>computed</h5>
    
    <button v-on:click="a++">Add to A</button>
      <button v-on:click="b--">Add to B</button>
      <p>A-{{a}}</p>
      <p>B-{{b}}</p>
      <p>Age + A={{addToA}}</p>
      <p>Age + B={{addToB}}</p>
  </div>
</template>

<script>
export default {
    name:"ComputeD",
    data(){
        
        return{
             age:20,
             a:0,
             b:0,
        }
    },
methods:{
        //   addToA:function(){
        //       console.log('addToA')
        //     return this.a + this.age;
        
        //    },
        //     addToB:function(){
        //       console.log('addToB')
        //     return this.b + this.age
        //  }
        },
        computed:{
            addToA:function(){
              console.log("hi")
            return this.a + this.age;
        
           },
            addToB:function(){
              console.log("a")
            return this.b + this.age
         }
        }
      }  
    


</script>

<style>

</style>