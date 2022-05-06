<template>
  <div>
<b-card no-body>
<b-tabs card>
<b-tab v-for="i in tabs" :key="i" :title="'Form' + i">
    <b-form>
 FirstName:<b-form-input type="text" name="fname" placeholder="Enter your FName" required></b-form-input>
 SecondName:<b-form-input type="text" name="sname" placeholder="Enter your SName" required></b-form-input>
 Srname:<b-form-input type="text" name="srname" placeholder="Enter your srName" required></b-form-input>
 contact:<b-form-input type="number" name="contact" placeholder="Ener your number" required></b-form-input>
 <b-button size="sm" variant="primary" @click="f1()">click</b-button >
    </b-form>
     <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">
            Close tab
     </b-button>
</b-tab>
<template #tabs-end>
<b-nav-item role="presentation" @click.prevent="f1" href="#"><b>+</b></b-nav-item>
  </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>

export default {
name:'TabS',
data(){
  return{
    tabs:[],
    tabCounter:0
  }

},

methods:{
 f1(){
  this.tabs.push(this.tabCounter++)
    },
    closeTab(x){
      for(let i = 0; i < this.tabs.length; i++){
         if (this.tabs[i] === x){
          this.tabs.splice(i, 1)
        }
      }
    }
  }
}
</script>

<style>

</style>