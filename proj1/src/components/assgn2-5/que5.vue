<template>
  <div>
      <h5>join elements</h5>
      <button @click="fun5()">join</button>
      <p>{{r1}}</p>
        <p>{{r2}}</p>
      <p>{{r3}}</p>

  </div>
</template>

<script>
export default {
    name:"QuE5",
    data(){
        return{
        myColor:["Red", "Green", "White", "Black"],
        r1:"",
        r2:"",r3:""
        }
    },
    methods:{
        fun5(){
        //myColor = ["Red", "Green", "White", "Black"]
          //document.write(this.myColor.toString())+"<br>"+(this.myColor.join())+"<br>"+(this.myColor.join('+'));
         this.r1=this.myColor.toString();
          this.r2=this.myColor.join();
         this.r3=this.myColor.join('+');
        }

    }

}
</script>

<style>

</style>