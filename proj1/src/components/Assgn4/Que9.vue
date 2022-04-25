<template>
  <div>
      <button @click= "spread()">click</button>
  </div>
</template>
<script>
export default {
    name:"QuE9",
    data(){
        return{
             //nums1:[4,56,76],
            //nums2:[5,65,45,45]
            string1:["krishna","mantra","agile"],
            string2:["500apps","technologies","development"]
        }
    },
    methods:{
        spread(){
           // var value=[...this.nums1,...this.nums2];
             // document.write(value)
             var value=[...this.string1,...this.string2];
             document.write(value)
        }
    }
}
</script>

<style>

</style>