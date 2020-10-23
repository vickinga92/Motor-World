<template>
  <div class="articleBox col-md-3">
    <h3 class="titleBox">{{ title }}</h3>
     <img class="image" alt="" :src="image" />
    <p><b>Descripción:</b> {{ desc }}</p>
    <p>MARCA: {{ brand }}</p>
    <p>TIPO: {{ type }}</p>
    <p>MODELO: {{ model }}</p>

    <h3 class="priceBox">{{ price }} €</h3>
    <button class="moreInfo" @click.prevent="getInformation"><b>Más info...</b></button>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "desc", "brand", "type", "model", "price"],
  methods: {
    getInformation() {
      this.$emit("get");
    },
  },
};
</script>

<style>
</style>
