<template>
  <div>
      <h5>sequence order</h5>
      <button @click="fun8()">order</button>
  </div>
</template>

<script>
export default {
    name:"QuE8",
    data(){
        return{
             color : ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
        }
    },
    methods:{
       fun8(){
          function Ordinal(n)
           {
             var o = ["th","st","nd","rd"],
              x = n%100;
              return x+(o[(x-20)%10]||o[x]||o[0]);
            }
             for(this.n = 0; this.n < this.color.length; this.n++){
             var ordinal = this.n + 1;
            var output = (Ordinal(ordinal) + " choice is " + this.color[this.n] + ".");
               console.log(output);
            }
        }


    }

}
</script>

<style>

</style>