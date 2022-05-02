<template>
  <div>
      <h5>remove duplicate elements</h5>
      <button @click="fun7()">remove</button>
  </div>
</template>

<script>
export default {
    name:"QuE7",
    data(){
        return{}
    },
    methods:{
        fun7(){
            
             var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
                function removeDuplicates(arr) {
                 return arr.filter((item, 
                  index) => arr.indexOf(item) === index);
               }
  
               console.log(removeDuplicates(arr));

        }
    }

}
</script>

<style>

</style>