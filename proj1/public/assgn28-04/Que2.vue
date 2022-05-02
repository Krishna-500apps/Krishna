<template>
  <div>
      <b-container>
     <b-form-select v-model="value" :options="countries"></b-form-select><br/><br/>
     <button @click="fun2()">search</button>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      >
      </b-pagination>

      <b-row cols-md="7">
        <b-table
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          striped
          hover
          :items="posts"
        >
         <b-col> <p>university_name: {{ value.university_name }}</p></b-col >
         <b-col><p>domains: {{ value.domains }}</p></b-col>
            <p @click="redirect(value.web_pages)">
            <a :href="value.web_pages" target="_blank">{{ value.web_pages }}</a>
        website_url: {{ value.web_pages }}</p>
        <b-col><p>state_province: {{ value.state_province }}</p></b-col>
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const { getNames }=require("country-list");
export default {
    name:"QuE2",
    data(){
        return{
            perPage:3,
           currentPage: 1,
           value: "",
           posts:[],
          countries: [],
    };
  },
    
    mounted(){
        let countries= getNames();
        this.countries=countries.map((row)=>{
           return{value:row, text:row};
        });
        if (this.countries.length) this.value = this.countries[0].text;
    },
    methods:{
        redirect(value) {
      window.open(value, "_blank");
        },
        async fun2(){
            const response=await fetch("http://universities.hipolabs.com/search?country="+this.value)
            
         const data = await response.json()
        this.posts = data.map((row) => {
        return {
          university_name: row.name,
           domains: row.domains,
          website_url: row.web_pages,
          state_province: row["state-province"],
        }
        })
        
    }
},
    computed: {
    rows() {
      return this.posts.length;
    }
  }
}
</script>
