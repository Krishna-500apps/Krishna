<template>
  <div>
    <h1>ES6 Filter method</h1>

    <button @click="fun()">click</button>

    <button @click="f1()">for Each</button>

    <button @click="f2()">map</button>
  </div>
</template>


<script>
export default {
  name: "ForM",

  data() {
    return {
      students: [
        { name: "Sukanya", grade: 96 },

        { name: "Naveen", grade: 84 },

        { name: "Chaitrika", grade: 80 },

        { name: "Navya", grade: 95 },

        { name: "Sri", grade: 90 },
      ],

      array: [4, 7, 2, 9, 6, 3],
    };
  },

  methods: {
    fun() {
     var studentnames = this.students.filter((student) => {
        return student.name != "Naveen";
      });

      console.log(studentnames);
    },

    f1() {
      this.array.forEach((arrayItems, index) => { 
        console.log(arrayItems, index);
      });
    },

    f2() {
      this.array.map((arrayItems, index) => {
        if (index == 2) return 0;

        console.log(arrayItems, index);
      });
    },
  },
};
</script>






