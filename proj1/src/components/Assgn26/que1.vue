<template>
  <div>
      <button @click="fun1()">alphabate</button>
      <button @click="fun2()">reverse</button>
      <p v-for="user in Users" :key="user.id"></p>
  </div>
</template>

<script>
export default {
    name:"QuE1",
    data(){
        return{
            Users:[
                {name:"500apps",id:1},
                {name:"Technologies",id:2},
                {name:"Agile",id:3},
                {name:"Mantra",id:4},
                {name:"Clockly",id:5},
                {name:"CRM",id:6},
                {name:"500apps",id:7},
            ]
            
        }
    },
    methods:{
        fun1(){
            var field="name";
            var res=this.Users.sort((a,b)=>
            (a[field] || "").toString().localeCompare((b[field] || "").toString())
            );
            console.log(JSON.Stringify(res));
        },
        fun2(){
            var field="name";
            var res=this.Users.sort((a,b)=>
            (a[field]||"").toString().localeCompare((b[field]||"").toString())
            );
            console.log(JSON.Stringify(res.reverse()));
            
        }

    }

}
</script>

<style>

</style>