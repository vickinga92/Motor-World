<template>
  <div class="container-showcase">
  <div class="showcase">
    <h1 class="bienvenido">Bienvenido a Motor-World</h1>
    <p class="bienvenido">Busca, compra o publica tu vehículo con total tranquilidad</p>
    <button class="btn btn-primary"  @click.prevent="cleanPost()"><nuxt-link to="/Ad">Publicar</nuxt-link></button>
  </div>
</div>
</template>

<script>
export default {
  methods: {   
    cleanPost() {
      this.$store.dispatch("cleanPost")
    },
   
  },

}
</script>

<style>

</style>
