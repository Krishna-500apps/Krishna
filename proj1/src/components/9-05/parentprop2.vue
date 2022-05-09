<template>
  <div>
     
  class="hello">
    <childprop2
      :name="name"
      ref="ref"
      :number="number" 
      :Items="Items">
    </childprop2>

  </div>
</template>

<script>
import childprop2 from "./childprop2.vue";

export default {
  Items:"",
  name: "ParentProp2",

  components: {
    childprop2,
  },

  data() {
    return {
      name: "ParentProp2",

      number:'',

      Items: [
        { name:"500apps", id:1},
        { name:"Technologies",id:2 },
        { name:"Agile", id:3 },
        { name:"Mantra", id:4 },
        { name:"Clockly", id:5 },
        { name:"CRM", id:6 },
        { name:"500apps",id:7 },
      ],
    }
  },

  
}
</script>


