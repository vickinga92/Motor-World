<template>
  <div class="box col-sm-3">
    <div>
      <img class="imageBox" alt="" :src="image" />
      <span class="priceBox">{{ price }} €</span>
    </div>
    <hr>
    <div class="articleBox">
      <p class="labelBrand">MARCA: <span> <b>{{ brand }}</b></span></p>
      <p class="labelKm">KM: <b>{{ km }}</b></p>
      <p> <b>{{ desc }}</b></p>
    </div>
  </div>


</template>

<script>
export default {
  props: ["image", "brand", "km", "price", "desc"],
};
</script>

<style>
</style>
