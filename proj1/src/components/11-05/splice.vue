<template>
<div>
    <h4>splice</h4>
    <button @click="fun1()">splice</button>
    <button @click="fun2()">splice add</button>
    <button @click="fun3()">slice</button>
     <button @click="fun4()">split</button>
</div>
</template>

<script>
export default {
name:"SplicS",
data(){
    return{
        array:["amara","sahithi","suji","nani","chandra"]
    }
},
methods:{
    fun1(){
        this.arr=this.array.splice(1, 2);
        document.write(this.array)
        // document.write(this.arr)

    },
     fun2(){
         this.arr1=this.arrray.splice(2,0, "raghu","ramana")
         document.write(this.array)
     },
     fun3(){
         this.arr2=this.array.slice(1,3)
         document.write(this.arr2)
     },
     fun4(){
        let text = "How are you doing today?";
          const res = text.split(" ");
          document.write(res)

     }
  }
}
</script>

<style>

</style>