<template>
  <div>
      <h2>filter concept</h2>
      <button @click="f1()">click</button>
      <button @click="f2()">forEach</button>
      <button @click="f3()">map</button>

  </div>
</template>

<script>
export default {
    name:"ForM3",
    data(){
        return{
            Employees:[
                {name:"hari",salary:'20000'},
                {name:"kumari",salary:'23000'},
                {name:"latha",salary:'25000'},
                {name:"mohan",salary:'27000'},
                {name:"ravi",salary:'30000'},

            ],
            //letages:[19,55,45,35],
           array:[5,6,8,4,9,2],
        };
    },
    methods:{
        f1(){
            let Employeenames=this.Employees.filter((Employees)=>{
                return Employees.name!="latha";
             });
               console.log(Employeenames);
             // let ages=this.ages.filter((ages)=>{
                  //return ages.age="adults";
              //});
             // console.log(ages);

        
        },
        f2(){
            this.array.forEach((arrayitems,index)=>{
                console.log(arrayitems,index);
            });
        },
        f3(){
            this.array.map((arrayitems,index)=>{
                if(index!=3)return 0;
                console.log(arrayitems,index);
            });
            
            
        },
    


            
        
    }

}
</script>

<style>

</style>