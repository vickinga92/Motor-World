<template>
   <div class="banner">
    <div class="container">
      <div class="login-area">
        <h3>Recover Password</h3>
        <form role="form" id="login-form">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputUser1"
              placeholder="Your Email"
            />
          </div>
          <button type="submit" class="btn-login">
            <button @click.prevent="forgotPass" type="submit">SEND PASSWORD</button>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: "forgot",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    async forgotPass() {
      let sendEmail = {
        email: this.email
      };
      try {
        let response = await this.$axios.post(
          "http://localhost:8083/auth/forgotten-password",
          sendEmail
        );

        this.$router.push("/login");
      } catch (err) {
        console.log(err.response.data.error);
      }
    }
  }
}
</script>

<style>

</style>
