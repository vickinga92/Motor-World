<template>
  <div class="box col-sm-3">
    <button v-bind:style="[FavoritesArticles (userId) ? {'background-color':'#FF0000'} : {'background-color':none}]" @click.prevent="updateFavorite">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
      <button v-show="this.$route.name === 'myPosts'" @click.prevent="deleteMoto">Eliminar</button>
      <button v-show="this.$route.name === 'myPosts'" @click.prevent="editPost">Editar</button>
    <button v-show="this.$route.name === 'myFavorites'" @click.prevent="deleteFavorite">Eliminar</button>
    <div>
      <img class="imageBox" alt="" :src="image" />
      <span class="secondHand">Segunda mano</span>
      <span class="priceBox">{{ price }} €</span>
    </div>
    <hr />
    <div class="articleBox">
      <p class="labelBrand">
        MARCA:
        <span>
          <b>{{ brand }}</b></span
        >
      </p>
      <p class="labelKm">
        KM: <b>{{ km }}</b>
      </p>
      <p>
        <b>{{ desc }}</b>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  props: ["userId","image", "brand", "km", "price", "desc"],
  data() {
    return {};
  },
  methods: {
    deleteMoto() {
      this.$emit("delete");
    },
    editPost() {
      this.$emit("edit");
    },
    updateFavorite() {
      this.$emit("updateFavorite");
    },
    deleteFavorite(){
      this.$emit("deleteFavorite")
    },
     FavoritesArticles (u) {

      let uFav = this.$store.state.FavoritesArticles;
      uFav = uFav.map (i => i.userId);

      const verifica = uFav.includes(u) ? true : false;

      return verifica;
    }
  },
};
</script>

<style>
</style>
