<template>
  <div>
    <h2>MIS ANUNCIOS PUBLICADOS</h2>
    <div class="container-fluid">
      <div class="row">
        <MyArticlePost
          v-for="item in UserArticles"
          :key="item.id"
          :image="item.image"
          :brand="item.brand"
          :km="item.km"
          :price="item.price"
          :desc="item.desc"
          @delete="deleteMoto(item._id)"
        ></MyArticlePost>
      </div>
    </div>
  </div>
</template>

<script>

import MyArticlePost from "@/partials/MyArticlePost";

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
   /*   async getArticlePublish(){
     let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      };
    try {
      let response = await this.$axios.get("http://localhost:8082/publish", config);
      console.log(response);
      this.ArticleBox = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  }, */
   /*  async deleteMoto(id){
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      };
    try {
      let response = await this.$axios.delete(`http://localhost:8082/post/${id}`, config);
      console.log(response);
      this.ArticleBox = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  }, */
 /*   async editMoto(id){
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      };
    try {
      let response = await this.$axios.put(`http://localhost:8082/post/${id}`, config);
      console.log(response);
      this.ArticleBox = response.data;
    } catch (err) {
      console.log(err);
      console.log("no se conecta", err.response);
    }
  } */
  },

  components: {
    MyArticlePost,
  }
  };
</script>

<style>
</style>
