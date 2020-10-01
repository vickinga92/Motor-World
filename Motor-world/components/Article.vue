<template>
  <div>
    <h2 class="text-center">Anuncios destacados</h2>
    <div class="container-fluid">
      <div class="row">
        <ArticleBox
          v-for="item in ArticleBox"
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
      ArticleBox: [""],
    };
  },
  async mounted() {
    try {
      let response = await this.$axios.get("http://localhost:8082/post");
      console.log(response);
      this.ArticleBox = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  },
  components: {
    ArticleBox,
  },
};
</script>

<style>
</style>
