<template>
  <div>
    <h3>msg:{{ message }}</h3>
    <h3>name:{{ name }}</h3>
    <h3>number:{{ number }}</h3>
    <h3>items:{{ items }}</h3>
    <i><b><h3>mantra:{{ mantra }}</h3></b></i>
  </div>
</template>

<script>
export default {
  name: "props",
  props: {
    message: String,
    name: String,
    number: { default: 1178, type: Number },
    mantra: String,
    items: [{ age: 25, fname: "krishna", lname: "malli" }],
  },
  methods: {
    fun1() {
      alert("hai, hello");
    },
  },
};
</script>

<style>
</style>
 