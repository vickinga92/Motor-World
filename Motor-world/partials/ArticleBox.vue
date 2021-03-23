<template>
  <div class="box col-sm-3">
    <button 
    v-show="this.$route.name !== 'myFavorites'"
    v-bind:style="[FavoritesArticles (_id) ? {'background-color':'#FF0000'} : {'background-color':''}]" 
    @click.prevent="updateFavorite">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
      <button v-show="this.$route.name === 'myPosts'" @click.prevent="deletePost">Eliminar</button>
      <button v-show="this.$route.name === 'myPosts'" @click.prevent="editPost">Editar</button>
    <button v-show="this.$route.name === 'myFavorites'" @click.prevent="deleteFavorite">Eliminar</button>
    <div>
    <div class="p-3">
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="4000"
        controls        
        img-width="1024"
        img-height="480"       
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <div v-for="(item, index) in image" :key="index">
        <b-carousel-slide>        
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              v-bind:src="`http://localhost:8083/post/img/${index}/${_id}`"              
            >
          </template>
        </b-carousel-slide>    
      </div>            
      </b-carousel>   
    </div>
           
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
  props: ["_id", "image", "brand", "km", "price", "desc"],
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    deletePost() {
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
      uFav = uFav.map (i => i._id);

      const verifica = uFav.includes(u) ? true : false;

      return verifica;
    }
  },
};
</script>

<style>
</style>
