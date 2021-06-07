<template>
  <div class="container-fluid">
    <h2 class="text-center">Marcas más buscadas</h2>
    <button
      @click.prevent="getBrand(item)"
      class="brand"
      v-for="item in brands"
      :key="item.id"
    >
      <img class="imagebrand" alt="brand" :src="item.img" />

    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        {
          id: 1,
          brand: "APRILIA",
          img: require("../assets/img/aprillia.png"),
        },
        {
          id: 2,
          brand: "BENELLI",
          img: require("../assets/img/Benelli-Logo.png"),
        },
        { id: 3, brand: "BETA", img: require("../assets/img/logo_betaracing.png") },
        { id: 4, brand: "BMW", img: require("../assets/img/bmw.png") },
        {
          id: 5,
          brand: "DAELIM",
          img: require("../assets/img/daelim.png"),
        },
        {
          id: 6,
          brand: "DERBI",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 7,
          brand: "DUCATI",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 8,
          brand: "GAS GAS",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 9,
          brand: "HARLEY DAVINSON",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 10,
          brand: "HONDA",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 11,
          brand: "HYOSUNG",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 12,
          brand: "KAWASAKI",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 13,
          brand: "KEEWAY",
          img: require("../assets/img/Aprilialogo.png"),
        },
        { id: 14, brand: "KTM", img: require("../assets/img/Aprilialogo.png") },
        {
          id: 15,
          brand: "KYMCO",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 16,
          brand: "MOTO GUZZI",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 17,
          brand: "PEUGEOT",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 18,
          brand: "PIAGIO",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 19,
          brand: "RIEJU",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 20,
          brand: "SUZUKI",
          img: require("../assets/img/Aprilialogo.png"),
        },
        { id: 21, brand: "SYM", img: require("../assets/img/Aprilialogo.png") },
        {
          id: 22,
          brand: "TRIUMPH",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 23,
          brand: "VESPA",
          img: require("../assets/img/Aprilialogo.png"),
        },
        {
          id: 24,
          brand: "YAMAHA",
          img: require("../assets/img/Aprilialogo.png"),
        },
      ],
      brand: "",
    };
  },
  methods: {
    getBrand(item) {
      this.brand = item.brand;
      this.$router.push(`/brand/${this.brand}`);
    },
  },
};
</script>

<style>
</style>
