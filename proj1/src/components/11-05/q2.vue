<template>
  <div>
<button @click="remove()">remove</button>
<p>{{array}}</p>
  </div>
</template>

<script>
export default {
    name:"QN2",
    data(){
        return{
           array:[1,3,5,9,3,9,0]
        }
    },
    methods:{
        remove(){
            this.array.pop()
            
        }
    }
        

        
    

}
</script>

<style>

</style>