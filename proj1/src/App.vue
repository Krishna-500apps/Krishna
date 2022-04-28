<template>
  <div>
    <router-view/>

    <!-- <h2>child to parent using refs</h2> -->

<!-- <Que6 ref="test" name="krishna">{{name}}></Que6> -->

<!--<button @click="parent()">click here</button>
<p>{{name}}</p>-->
  </div>
</template>

<script>
//import Que5 from './components/21/04/Que5.vue'

 //import Que6 from "./components/assignment child/Que6.vue";
//import que5child from './components/Assgn4/que5child.vue'
export default {
  //name: "QuE6",
   // name:"que5child",
  component: {
    //Que6,
    //"que5child"
  },

//   methods: {

//   parent() {
//   let result=this.$refs.test.name;
// return result
//   }

// }

};
</script>