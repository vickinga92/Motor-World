<template>
  <div class="container-fluid">
    <div class="typeMotos">
      <h2 class="text-center">TIPOS</h2>
      <button

        class="btn-type"
        v-for="item in types"
        :key="item.id"
      >
        {{ item.type }}
      </button>
    </div>
  </div>


</template>
<script>
export default {
  data() {
    return {
      types: [
        { id: 1, type: "SCOOTERS"},
        { id: 2, type: "CICLOMOTOR"},
        { id: 3, type: "SPORT" },
        { id: 4, type: "NAKED" },
        { id: 5, type: "SUPERMOTARD" },
        { id: 6, type: "ENDURO" },
        { id: 7, type: "TRAIL" },
      ],
      brand: "",
    };
  },
  methods: {
    getType(item) {
      this.type = item.type;
      this.$router.push(`/motos/${this.type}`);
    },
  },
};

/*   @click.prevent="getType(item)" */

</script>

<style>
</style>
