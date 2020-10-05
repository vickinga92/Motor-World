<template>

      <div class="article col-sm-4">
        <img alt="" :src="image" />
        <h3>{{title}}</h3>
        <p> <b>Descripción:</b> {{ desc }}</p>
        <p>MARCA: {{ brand }}</p>
        <p>TIPO: {{type}}</p>
        <p>MODELO: {{model}}</p>

        <h3 class="priceBox">{{ price }} €</h3>
        <button>Más info...</button>

      </div>

</template>

<script>
export default {
  props: ["image", "title", "desc", "brand", "type", "model",  "price"],
};
</script>

<style>
</style>
