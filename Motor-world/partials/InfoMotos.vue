<template>

  <div class="box col-sm-3 col-md-4"> 
      <button v-show="this.$route.name !== 'myFavorites'" v-bind:style="[FavoritesMotos(id) ? {'background-color':'#FF0000'} : {'background-color':''}]" @click.prevent="updateFavorite"><i class="fa fa-heart-o" aria-hidden="true" ></i></button>
      <button v-show="this.$route.name === 'myFavorites'" @click.prevent="deleteFavorite">Eliminar</button>
    <div>  
    <h3 class="titleBox"><b>{{ title }}</b></h3>
    </div>
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
                v-bind:src="`http://localhost:8083/motos/img/${index}/${_id}`"              
              >
            </template>
          </b-carousel-slide>    
        </div>            
        </b-carousel>   
      </div>
    <hr>
    <div class="articleBox">
      <p class="labelBrand">MARCA: <b>{{ brand }}</b> <span> {{displacement}} CC</span></p>
      <p class="labelType">TIPO: {{ type }} </p>
      <p class="labelModel">MODELO: {{ model }} </p>    
      <p><b>{{ desc }}</b></p>
    <hr>
      <h3 class="priceBox">{{ price }} €</h3>
      <button class="moreInfo" @click.prevent="getInformation">
        <b>Más info...</b>
      </button>   
    </div>
  </div>
</template>

<script>
export default {
  props: ["_id","id","image", "title", "desc", "brand", "type", "displacement", "model", "price"],
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
    getInformation() {
      this.$emit("get");
    },
    updateFavorite() {
      this.$emit("updateFavorite");
    },
    deleteFavorite(){
      this.$emit("deleteFavorite")
    },
    FavoritesMotos(id) {
      
      let idFav = this.$store.state.FavoritesMotos;
      idFav = idFav.map (i => i.id);

      const verifica = idFav.includes(id) ? true : false;

      return verifica;
    }

  }


};
</script>

<style>
</style>
