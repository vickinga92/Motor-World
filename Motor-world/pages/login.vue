<template>
  <div class="banner">
    <div class="container">
      <div class="login-area">
        <h3>LOGIN</h3>
        <form role="form" id="login-form">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Your Password"
              required
            />
          </div>
          <div class="checkbox form-group">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button @click.prevent="login" type="submit" class="btn-login">LOGIN</button>
          <h3 class="recover">Forgot password?</h3>
          <button type="submit" class="btn-recover">
            <nuxt-link to="/forgot">RECOVER PASSWORD</nuxt-link>
          </button>
          <h3 class="singin">Don't have an account yet?</h3>
          <button type="submit" class="btn-singin">
            <nuxt-link to="/Register">SING IN</nuxt-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "login",
  data(){
    return{
      email: "",
      password:""
    }
  },
  methods:{
    async login(){
      let loginData = {
        email: this.email,
        password: this.password
      }
       const validatedEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        this.email
      );
      if (
        loginData.email !== "" &&
        loginData.password !== "" &&
        validatedEmail
      ) {
        try {
          let response = await this.$axios.post(
            "http://localhost:8083/auth/login",
            loginData
          );
          window.localStorage.setItem("token", response.data.token);
          this.$store.dispatch("login");
          this.$router.push("/");
        }catch(err) {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email y/o contraseña incorrectos!",
            footer: ' <button><a href="/forgot">RECOVER PASSWORD</a>'
          });
          console.log(err.response.data.error);
        }
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe incluir un email válido!"
      });
    }
  }
}
</script>

<style>

</style>
