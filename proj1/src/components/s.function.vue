<template>
  <div>
      <h2>search functionalites</h2>
      <p id="demo"></p>
  </div>
</template>

<script>
export default {
    let text="welcome to mantra",
    let position=text.search("mantra")
    document.getElementById("demo").innerHTML=position;


}
</script>

<style>

</style>