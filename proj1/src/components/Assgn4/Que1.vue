<template>
  <div>
      <center>
    <th>Name</th>
    <th>index</th>
    <tr v-for="(table_data, index) in table_data" :key="table_data.index">
      <td>{{ table_data.name }}</td>
      <td>{{ index }}</td>
    </tr>
      </center>
  </div>

</template>

<script>
export default {
  name: "QuE1",
  data() {
    return {
      table_data: [
        { name: "Agile CRM", description: "A company of excellence" },
        { name: "mantra technologies", description: "500apps" },
        { name: "500apps Python", description: "Backend built using python" },
        { name: "500apps infinity", description: "Builtusing vue JS" },
      ],
    };
  },
};
</script>
<style scoped>
table {
font-family: arial;
border-collapse: collapse;
width: 60%;
text-align: center;
}
td,
th {
border: 5px solid #dddddd;
text-align: center;
padding: 8px;

}

</style>