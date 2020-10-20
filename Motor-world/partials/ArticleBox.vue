<template>

      <div class="articleBox col-sm-4">
        <img alt="" :src="image" />
        <h3>MARCA: {{ brand }}, KM: {{ km }}</h3>
        <h3 class="priceBox">{{ price }} €</h3>
        <p> <b>Descripción:</b> {{ desc }}</p>
      </div>

</template>

<script>
export default {
  props: ["image", "brand", "km", "price", "desc"],
};
</script>

<style>
</style>
