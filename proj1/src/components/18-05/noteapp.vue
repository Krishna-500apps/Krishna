<template>
  <div>
    <center>
      <b-card-group deck class="w-25">
        <b-card
          border-variant="primary"
          header="loginform"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-form>
            <b-form-input
              type="text"
              id="username"
              placeholder="Enter username"
              required
            >
            </b-form-input>
            <br />
            <b-form-input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            >
            </b-form-input>
            <br />
          </b-form>
          <router-link to="/app2">
            <button @click="signup()">signup</button>
          </router-link>
        </b-card></b-card-group
      >
    </center>
  </div>
</template>

<script>
export default {
  name: "note_app",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signup() {
         alert("Login Successful");
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      // if(localStorage.setItem("username") === null &&
      //   localStorage.setItem("password") === null)
      
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);

      let date = new Date();
      let expire = new Date();
      expire.setItem(date.getItem() + 24 * 60* 60* 1000);
      document.cookie= "username=" + username.value + "path=/"+"expires" + expire.toUTCString();
      document.cookie= "password=" + password.value + "path=/"+"expires" + expire.toUTCString();


     
    },
  },
 
  
};
</script>

<style>
</style>