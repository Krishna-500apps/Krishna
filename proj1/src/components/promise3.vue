<template>
  <div>
      <h4>promise with axios</h4>
      <button @click="fun1()">promise</button>
  </div>
</template>

<script>
const axios=require('axios').default;
export default {
    name:"PromisE3",
    data(){
        return{

        }
    },
    methods:{
         fun1(){
            let mypromise=new Promise((Resolve,Reject)=>{
            const response= axios.get("http://universities.hipolabs.com/search?country=")
             Resolve(response)
             Reject("error")
            })
            mypromise.then((response)=>{
                console.log(response.data);
                return;
            });
            mypromise.then((error)=>{
                if(error.response){
                    console.log(error.response.data);
                }
            });

            
        }
    }
    

    

}
</script>

<style>

</style>