<template>
  <div>
    <h2 class="text-center">Motos por Marcas</h2>
    <InfoMotos v-for="item in InfoMotos" :key="item.id"
    :image="item.image"
    :title="item.image"
    :desc="item.desc"
    :brand="item.brand"
    :type="item.type"
    :model="item.model"
    :price="item.price"
    ></InfoMotos>
    <Article></Article>
  </div>
</template>

<script>
import InfoMotos from "@/partials/InfoMotos";
import Article from "@/components/Article";

export default {
  data() {
    return {
      InfoMotos:[""]
    };
  },
  async mounted(){
     try {
      let response = await this.$axios.get("http://localhost:8082/motos");
      console.log(response);
      this.InfoMotos = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  },
  components: {
    InfoMotos,
    Article,
  },
};
</script>

<style>
</style>
