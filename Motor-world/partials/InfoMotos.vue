<template>

  <div class="box col-sm-3 col-md-4">    
      <button v-bind:style="[FavoritesMotos(id) ? {'background-color':'#FF0000'} : {'background-color':none}]" @click.prevent="updateFavorite"><i class="fa fa-heart-o" aria-hidden="true" ></i></button>

      <button v-show="this.$route.name === 'myFavorites'" @click.prevent="deleteFavorite">Eliminar</button>
    <div>  
    <h3 class="titleBox"><b>{{ title }}</b></h3>
    </div>
    <div>
      <img class="image" alt="" :src="image" />
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
  props: ["id","image", "title", "desc", "brand", "type", "displacement", "model", "price"],
  methods: {
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
