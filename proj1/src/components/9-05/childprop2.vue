<template>
  <div>
    <h4>name:{{ name }}</h4>
    <h4>number:{{ number }}</h4>
    <b-table striped hover :items="Items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "ParentProp2",

  components: {},

  props: {
    name: String,

    number: {
      default: 1185,
      type: Number,
    },
    Items: Array,
  },

 
}
</script>