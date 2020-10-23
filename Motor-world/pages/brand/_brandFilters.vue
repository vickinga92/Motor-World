<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <InfoMotos
          v-for="item in MotosBrand"
          :key="item.id"
          :id="item.id"
          :image="item.image"
          :title="item.title"
          :desc="item.desc"
          :brand="item.brand"
          :type="item.type"
          :model="item.model"
          :price="item.price"
          @get="getInformation(item)"
        ></InfoMotos>
      </div>
    </div>
  </div>
</template>

<script>
import InfoMotos from "@/partials/InfoMotos";

export default {
  name: "brandFilters",
  data() {
    return {
      MotosBrand: [""],
      brand:""
    };
  },
  mounted() {
    this.getBrand();
  },
  methods: {
    async getBrand() {
      try {

        let info = await this.$axios.get(`http://localhost:8082/brand/${this.$route.params.brand}`);
        this.MotosBrand = info.data;
    console.log("esta es la ruta-----", this.$route.params.brand )
        console.log("cogiendo marca yaaa-------", this.MotosBrand);
      } catch (err) {
        console.log("no se conecta", err.response);
      }
    },
  },
  components: {
    InfoMotos,
  },
};
</script>

<style>
</style>
