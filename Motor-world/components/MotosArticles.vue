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
            :displacement="item.displacement"
            :model="item.model"
            :price="item.price"
            @get="getInformationMotos(item)"
            @ad="adToFavorites(item)"
          ></InfoMotos>
      </div>
    </div>
  </div>
</template>

<script>
import InfoMotos from "@/partials/InfoMotos";

export default {
  data() {
    return {
      id:""
    };
  },
  async mounted() {
    await this.$store.dispatch("getInfoMotos");
  },
  computed: {
    InfoMotos() {
      return this.$store.state.InfoMotos;
    }
  },
  methods: {
    async getInformationMotos(item) {
      this.id = item.id;
      this.$router.push(`/motos/${this.id}`);
    },
    async adToFavorites(item){
     await this.$store.dispatch("adToFavorites", item)
    },

  },
  components: {
    InfoMotos,
  },
};
</script>

<style>
</style>
