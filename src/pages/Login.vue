<template>
  <div class="hint">
    <h5>Name:</h5>
    <h6>kminchelle</h6>
    <h5>Password:</h5>
    <h6>0lelplR</h6>
  </div>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjH3TXHIFe5UR3590DqAVa6GenxieHbRPCQ&usqp=CAU"
    alt=""
  />
  <div class="cont">
    <input type="text" v-model="name" placeholder="Enter Name" required />
    <input
      type="text"
      v-model="password"
      placeholder="Enter your Password"
      required
    />
    <button v-on:click="login">LOGIN</button>
  </div>
</template>


<script>
// import axios from "axios";

export default {
  name: "login",

  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.name,
          password: this.password,
          // expiresInMins: 60, // optional
        }),
      });
      const data = await response.json();
      console.log(data.username, data.password);
      if (response.ok) {
        this.$router.push({ name: "Home" });
        console.log("successful");
      } else {
        alert("Please Enter Correct Username Or Passwprd");
        console.log("bad request");
      }
    },
  },
};
</script>




<style scoped>
.cont {
  width: 250px;
  margin-left: 500px;
  padding: 10px;
}
input {
  margin-bottom: 1rem;
  border: 2px solid;
  padding: 1rem;
  width: 30rem;
  border-color: skyblue;
}
.cont button {
  margin-left: 4rem;
  cursor: pointer;
  width: 7rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: large;
  border: white;
  border-radius: 7px;
  background: rgb(0, 8, 166);
  color: white;
}
.cont button:hover {
  background: black;
  color: gold;
}
img {
  width: 300px;
  margin-left: 500px;
  margin-top: 5rem;
}
</style>

