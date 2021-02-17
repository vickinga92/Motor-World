<template>
  <div>
    <h2>Motos de segunda mano</h2>
    <div class="container-fluid">
      <div class="row">
        <ArticleBox
          v-for="item in AllArticles"
          :key="item.id"
          :image="item.image"
          :brand="item.brand"
          :km="item.km"
          :price="item.price"
          :desc="item.desc"
          @updateFavorite="updateFavorite(item._id)"
        ></ArticleBox>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBox from "@/partials/ArticleBox";

export default {
  name: "Article",
  data() {
    return {

    };
  },
    async mounted(){
    await this.$store.dispatch("getAllArticles")

   },
   computed: {
    AllArticles() {
      return this.$store.state.AllArticles;
    }
  },
   methods: {
    async updateFavorite(_id){
      await this.$store.dispatch("updateFavorite", { id: _id, isMoto: false })
    }
  },

  components: {
    ArticleBox,
  },
};
</script>

<style>
</style>
