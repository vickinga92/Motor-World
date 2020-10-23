<template>
  <div>
    <div class="container-fluid">
      <div class="row">
          <InfoMotos
            v-for="item in InfoMotos"
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
    <Article></Article>
  </div>
</template>

<script>
import InfoMotos from "@/partials/InfoMotos";
import Article from "@/components/Article";

export default {
  data() {
    return {
      InfoMotos: [""],
      id:""
    };
  },
  async mounted() {
    try {
      let response = await this.$axios.get("http://localhost:8082/motos");
      this.InfoMotos = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  },
  methods: {
    async getInformation(item) {
      this.id = item.id;
      this.$router.push(`/motos/${this.id}`);
    },
  },
  components: {
    InfoMotos,
    Article,
  },
};
</script>

<style>
</style>
