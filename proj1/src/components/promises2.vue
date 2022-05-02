<template>
  <div>
      <h3>promise with fetch</h3>
      <button @click="fun2()">click</button>
  </div>
</template>

<script>
export default {
    name:"PromiseS2",
    data(){
        return{}
     
    },
    methods:{
        fun2(){
            let mypromise=new Promise((Resolve,Reject)=>{
                let response=fetch("http://universities.hipolabs.com/search?country=")+this.value
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
                
            })
        }
        
    }

}
</script>

<style>

</style>