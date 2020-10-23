<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <nuxt-link class="Logo" to="/">
      <span>
        <img alt="Logo" src="@/assets/img/logo3.jpg"/>
      </span>
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active" v-for="item in menu" :key="item.id">
          <nuxt-link class="nav-link text-white" :to="item.path">
            {{ item.name }}
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-white"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Dropdown</a
          >
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
            v-for="item in submenu"
            :key="item.id"
          >
            <nuxt-link class="dropdown-item" :to="item.path">{{
              item.subname
            }}</nuxt-link>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>

      <nuxt-link to="/Ad" class="text-warning">
        <button class="button">PUBLICA TU ANUNCIO</button></nuxt-link
      >

      <button
        class="nav-item nav-link text-danger"
        v-if="isAuth"
        @click.prevent="logout"
      >
        LOGOUT
      </button>
      <button v-else>
        <nuxt-link to="/login" class="nav-link text-success">LOGIN</nuxt-link>
      </button>
      <button v-if="!isAuth">
        <nuxt-link to="/register" class="nav-link text-success"
          >SING IN</nuxt-link
        >
      </button>
    </div>
  </nav>
</template>

<script>
import { fas } from "@fortawesome/free-solid-svg-icons";

export default {
  props: ["menu", "submenu"],
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },
  },

  methods: {
    logout() {
      try {
        console.log("esta entrando aqui");
        this.$store.dispatch("logout");
        this.$router.push("/");
      } catch (err) {
        console.log(err.response.data.error);
      }
    },
  },
};
</script>

<style>
</style>
