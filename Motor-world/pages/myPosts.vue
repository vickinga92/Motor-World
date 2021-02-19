<template>
  <div>
    <h2>MIS ANUNCIOS PUBLICADOS</h2>
    <div class="container-fluid">
      <div class="row">
        <ArticleBox
          v-for="item in UserArticles"
          :key="item.id"
          :userId="item.userId"
          :image="item.image"
          :brand="item.brand"
          :km="item.km"
          :price="item.price"
          :desc="item.desc"
          @delete="deleteMoto(item._id)"
          @edit="editMoto(item._id)"
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
    await this.$store.dispatch("getArticlePublish")

   },
   computed: {
    UserArticles() {
      return this.$store.state.UserArticles;
    }
  },

  methods:{
    deleteMoto(id){
      this.$store.dispatch("deleteMoto", { id: id });
    },
    editMoto(id){
      this.$store.dispatch("editMoto", {id: id})
    }
  },

  components: {
    ArticleBox,
  }
  };
</script>

<style>
</style>
