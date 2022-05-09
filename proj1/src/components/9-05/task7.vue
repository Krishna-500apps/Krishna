<template>
  <div>
      <h4>Es6</h4>
      <button @click="fun1()">forEach</button>
      <button @click="fun2()">map</button>
      <button @click="fun3()">filter</button>
  </div>
</template>

<script>
export default {
    name:"TasK7",
    data(){
        return{
            Emp:[
                {id:1121,name:"charan",sal:"22000"},
                {id:1122,name:"ramana",sal:"24000"},
                {id:1123,name:"akhil",sal:"26000"},
                {id:1124,name:"amara",sal:"28000"},
                {id:1125,name:"sahithi",sal:"30000"},

            ]
        }
    },
methods:{
    fun3(){
        var Employenames=this.Emp.filter((Emp)=>{
        return Emp.name!="amara";
        });
        console.log(Employenames)
    },
    fun2(){
        var Employenames=this.Emp.map((Emp)=>{
        return Emp.name="sahithi";
        });
        console.log(Employenames)
    },
    // fun1(){
    //     var Employenames=this.Emp.forEach((Emp)=>{
    //     return Emp.name="sahithi";
    //     });
    //     console.log(Employenames)
    // }
 }

}
</script>

<style>

</style>