<template>
  <div>
      <h1>output of the function</h1>
      <p>{{perimeter()}}</p>
      <p>{{diameter()}}</p>
  </div>
</template>

<script>
export default {
    name:"QuE1",
    data(){
        return{
            radius:20,
            PI:3.14,
            perimeter: () => 2* Math.PI * this.radius,
            diameter:()=>this.radius*2
        }
    },
}
</script>

<style>

</style>