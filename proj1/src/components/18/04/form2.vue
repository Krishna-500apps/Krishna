<template>
  <div>
    <h1>filter method</h1>
    <button @click="fun()">click</button>
    <button @click="fun1()">for Each</button>
    <button @click="fun2()">map</button>
  </div>
</template>

<script>
export default {
    name:"ForM2",
    data(){
        return{
            Employes:[
                {name:"krishna",dept:"devp"},
                {name:"sai",dept:"sales"},
                {name:"teja",dept:"testing"},
                {name:"ram",dept:"markting"},
            ],
            array:[4,5,2,6,7,9,1],
        };

    },
    methods:{
        fun(){
            var Employenames=this.Employes.filter((Employes)=>{
                return Employes.name!="krishna";

            });
            console.log(Employenames);
        },
        fun1(){
            this.array.forEach((arrayItems,Index)=>{
             console.log(arrayItems,Index);

            });
        },
            fun2(){
                this.array.map((arrayItems,Index)=>{
                    if(Index==2)return 0;
                    console.log(arrayItems,Index);
                });
        
            

        },
            
    }



}
</script>

<style>
</style>