<template>
  <div>
       <center>

        <b-card  class = "w-25" header-tag="nav" header-bg-variant="info">
            <template #header >
            <b-nav card-header tags >
              <b-nav-item><b-icon icon="house-door-fill" /> Home </b-nav-item>
               <b-nav-item><b-icon icon="filter-square-fill" class="item" /></b-nav-item>
            </b-nav>
            </template>
             <router-link to="/app">
             <button @click="f2()"></button>
             </router-link>
            </b-card>
       </center>
  </div>
</template>

<script>
export default {
    name:"note_app3",

}
</script>

<style>

</style>