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
 /*  async mounted() {

    try {
      let response = await this.$axios.get("http://localhost:8082/post");
      console.log(response);
      this.AllArticles = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  },*/
  components: {
    ArticleBox,
  },
};
</script>

<style>
</style>
