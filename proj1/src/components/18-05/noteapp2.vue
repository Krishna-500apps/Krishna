<template>
  <div>
    <!-- <noteapp :res="res" /> -->
    <center>

        <b-card  class = "w-25" header-tag="nav" header-bg-variant="danger">
            <template #header >
            <b-nav card-header tags >
              <b-nav-item><b-icon icon="house-door-fill" /> Home </b-nav-item>
               <b-nav-item><b-icon icon="filter-square-fill" class="item" /></b-nav-item>
            </b-nav>
          </template>
          <router-link to="/app3">
          
            <button @click="f1()"><b-icon icon="plus-circle" />Add</button>

          </router-link>
        </b-card>
    </center>
  </div>
</template>

<script>
export default {
  name: "note_app2",
};
</script>

<style>
.item{
     position: absolute; 
  top: 10px; 
  right: 10px;
}
</style>