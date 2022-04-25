<template>
  <div>
    <h1>Hello</h1>

    <Que5 @Clickme="fun"></Que5>
  </div>
</template>

<script>
import Que5 from "./Que5.vue";

export default {
  name: "EmiT",

  components: {
    Que5,
  },

  methods: {
    fun() {
      document.write("Welcome to mantra");
    },
  },
};
</script>