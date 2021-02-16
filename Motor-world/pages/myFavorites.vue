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
          ></InfoMotos>
          
      </div>
      <Brand></Brand>
    </div>
  </div>
</template>

<script>
import InfoMotos from "@/partials/InfoMotos";
import Brand from "@/components/Brand";

export default {
 name: "MyFavorites",
data() {
    return {

    };
  },
  async mounted(){
    await this.$store.dispatch("getAllFavorites")

   },
    computed: {
    FavoritesMotos() {
      return this.$store.state.FavoritesMotos;
    }
  },
  components: {
    InfoMotos,
    Brand
  },
}
</script>

<style>

</style>
