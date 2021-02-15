
<template>
  <div class="box col-sm-3">
    <div>
      <img class="imageBox" alt="" :src="image" />
      <span class="secondHand">Segunda mano</span>
      <span class="priceBox">{{ price }} €</span>
    </div>
    <hr />
    <div class="articleBox">
      <p class="labelBrand">
        MARCA:
        <span>
          <b>{{ brand }}</b></span
        >
      </p>
      <p class="labelKm">
        KM: <b>{{ km }}</b>
      </p>
      <p>
        <b>{{ desc }}</b>
      </p>
      <button @click.prevent="deleteMoto">Eliminar</button>
      <button @click.prevent="editMoto">Editar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "brand", "km", "price", "desc"],
  data() {
    return {};
  },
  methods: {
    deleteMoto() {
      this.$emit("delete");
    },
    editMoto() {
      this.$emit("edit");
    },
  },
};
</script>

<style>
</style>
