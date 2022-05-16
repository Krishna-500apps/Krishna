<template>
  <div>
    students:<b-form-select
      v-model="studentdata.studentid"
      :options="students"
      value-field="id"
      text-field="Name"
    ></b-form-select
    ><br /><br />
    subjects:
    <b-form-select
      v-model="studentdata.subject"
      :options="subjects"
    ></b-form-select>

    date: <b-form-datepicker v-model="studentdata.date"></b-form-datepicker
    ><br />
    marks:<b-form-input
      v-model="studentdata.marks"
      type="number"
      placeholder="enter student marks upto 100"
      min="0"
      max="100"
    ></b-form-input
    ><br />
    remarks:<b-form-input
      v-model="studentdata.remarks"
      type="text"
    ></b-form-input
    ><br />
    <b-button variant="primary" @click="fun()">submit</b-button><br /><br />
    <p id="ak"></p>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "TasK10",

  data() {
    return {
      studentdata: {
        studentid: "",
        subject: "",
        date: "",
        marks: "",
        remarks: "",
      },
      students: [],
      selected: null,
      subjects: [
        { value: 1, text: "english" },
        { value: 2, text: "mathematics" },
        { value: 3, text: "electronics" },
      ],
    };
  },

  async mounted() {
    await this.fun1();
  },

  methods: {
    async fun1() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );

      this.students = await response.data;
    },

    fun() {
      document.getElementById("ak").innerHTML = JSON.stringify(
        this.studentdata
      );
    }
  }
}
</script>
