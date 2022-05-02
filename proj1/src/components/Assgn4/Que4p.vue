 <template>
   <div>
   <props :msg="msg" :name="name"></props>
   </div>
 </template>
 <script>
   import props from './Que4.vue'
 export default {
        name: "QuE4",
   components: {
     props,
   },
   data() {
    return {
      msg: "Hi",
      name: "Goodevening",
   };
   },
 };
 </script>