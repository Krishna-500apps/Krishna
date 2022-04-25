<template>
  <div>
     <!-- <b-card v-for="data in table_data" :key="data.name" >
       Name: {{data.name}}<br>
      Description: {{data.description}}<br>
       Yearsofexperience: {{data.Yearsofexperience}}<br>
       Location: {{data.Location}}
      </b-card>-->
      <h1> {{ name}} </h1>
      <h1>{{description }}</h1>
      <h1>{{yearsofexperience}}</h1>
      <h1>{{location}}</h1>
  </div>

</template>

<script>
export default {
    name:"QuE2",
    data(){
        return{
               name:"name:Agile CRM",
               description:"description: A company of excellence",
          yearsofexperience:"yearsofexperience:12",
          location:"location:Hyderabad",
        }

    }

}
</script>

<style>

</style>