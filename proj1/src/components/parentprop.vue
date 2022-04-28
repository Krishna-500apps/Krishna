<template>
  <div>
      <Emitchek/><apple></apple>
      <second></second>
      <!-- <props message="welcome" name="krishna" number="number" mantra="mantra"/> -->
      <Props message="message" name="name" number="number" items="items"></Props>
      <button @click="click()">submit</button>
  </div>
</template>

<script>
import apple from'../first'
import second from'../second'
import Props from '../components/'
//import emailcheck from '@/views/parentclass.vue'
import{eventBus} from '../main.js'
export default {
    name:'HelloWorld',
    components:{
        apple,
        second,
        props,
        // emailcheck
        },
    data(){
        return{
            message:"vuecomponents",
            name:"krishna",
            num:"1178",
            items:[{age:25,firstname:"krishna",lastname:"malli"},
                  {age:35,firstname:"hari",lastname:"abc"},
                  {age:28,firstname:"giri",lastname:"def"},
                  {age:41,firstname:"rani",lastname:"pqr"},
                  {age:30,firstname:"kiran",lastname:"xyz"}],
        }
    },


                  mantra:"mantratechnologies",
                  mounted:function(){
                      eventBus.$on("bus emitcheck",data=>{console.log("Bus on called",data);})},
                      methods:{
                          click(){
                              this.$refs.ref.fun();
                              this.$refs.refo.items;
                              console.log("i did it")

                          },
                      },

                  }
   

        
    


</script>

<style>

</style>