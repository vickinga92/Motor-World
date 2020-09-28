<template>
  <div class="wrapper">
    <div class="banner">
      <div class="container">
        <div class="login-area">
          <h3>SING IN</h3>
          <form role="form" id="login-form">
            <div class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputUser3"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword4"
                placeholder="Your Password"
                required
              />
            </div>
            <button type="submit" class="btn-login" @click.prevent="register">SING IN</button>
            <h3 class="register-area">Already have an account?</h3>
            <button type="submit" class="btn-singin">
              <nuxt-link to="/login">LOGIN</nuxt-link>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Register",
    data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      let UserRegister = {
        email: this.email,
        password: this.password
      };
      try {
        let response = await this.$axios.post(
          "http://localhost:8082/users",
          UserRegister
        );
        this.$router.push("/login");
      }catch(err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Email está en uso!"
        });
        console.log(err.response.data.err);
      }
    }
  }
}
</script>

<style>
</style>
