<template>
  <div class="box shop col-sm-3">
   <button>
     <i class="fa fa-heart-o" aria-hidden="true"></i>
     </button>
    <img class="imageBox" :src="img" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <div>
      <span class="priceBox">{{ price }}</span>
      <button class="btn-shop"><a :href="link" target="_blank">ver oferta</a>
      </button>
      <button class="btn-shop">AÑADIR AL CARRITO - <i class="fa fa-shopping-cart"  aria-hidden="true"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "desc", "price", "link"],
};
</script>

<style>
</style>
