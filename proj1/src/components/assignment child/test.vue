<template>
  <div>
      
      <button @click="fun1()">forEach</button>
      <button @click="fun2()">filter</button>
      <button @click="fun3()">find</button>
      <button @click="fun4()">map</button>
  </div>
</template>

<script>
export default {
    name:"TesT",
    data(){
        return{
           
            Employes:[
                {name:"rani",sal:"20000"},
                {name:"raghu",sal:"25000"},
                {name:"anu",sal:"27000"},
            ],
             a=[5,4,9,7,4,6,8],
        };
    },
    methods:{
        fun1(){
             this.result=this.Employes.forEach((name,sal)=>{
                 console.log(name,sal)

             });
           },   
           fun2(){
               var a=this.a.filter((a)=>{
                   console.log(typeof(a));
                   return a==1;
                })
                console.log(value)
           }
    }                        
        
    

    


}
</script>

<style>

</style>