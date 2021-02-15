<template>
  <div>
    <div class="container-fluid">
      <h1>Esta es la página de mis artículos favoritos</h1>
      <div class="row">
        <InfoMotos
          v-for="item in FavoritesMotos"
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
          @deleteFavorite="deleteFavorite(item._id)"

        ></InfoMotos>
         <ArticleBox
          v-for="item in FavoritesArticlesMotos"
          :key="item.id"
          :image="item.image"
          :brand="item.brand"
          :km="item.km"
          :price="item.price"
          :desc="item.desc"
        ></ArticleBox>
      </div>

      <Brand></Brand>
    </div>
  </div>
</template>

<script>
import InfoMotos from "@/partials/InfoMotos";
import ArticleBox from "@/partials/ArticleBox";
import Brand from "@/components/Brand";

export default {
  name: "MyFavorites",
  data() {
    return {};
  },
  async mounted() {
    await this.$store.dispatch("getAllFavorites");
    await this.$store.dispatch("getAllFavoritesArticles");
  },
  computed: {
    FavoritesMotos() {
      return this.$store.state.FavoritesMotos;
    },
    FavoritesArticlesMotos() {
      return this.$store.state.FavoritesArticlesMotos;
    },
  },
  methods: {
    async getInformationMotos(item) {
      console.log(item.id);
      this.id = item.id;
      this.$router.push(`/motos/${this.id}`);
    },
    async deleteFavorite(_id){
      await this.$store.dispatch("deleteFavorite", { id: _id })
    }

  },
  components: {

    InfoMotos,
    ArticleBox,
    Brand,
  },
};
</script>

<style>
</style>
