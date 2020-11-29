<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

 <FiltersMotosInfo
  @brand="motosToBrand"
  @getPrice="getPrice"
  @type="getType"
  @displacement="getDisplacement"
  ></FiltersMotosInfo>
  <MotosArticles></MotosArticles>
  <Article></Article>
  <Brand></Brand>

</div>
</template>

<script>
import FiltersMotosInfo from '@/components/FiltersMotosInfo'
import MotosArticles from '@/components/MotosArticles'
import Article from "@/components/Article";

import Brand from '@/components/Brand'



export default {
  name: "Motos",
  data(){
    return{

    }
  },
  async mounted() {
    await this.$store.dispatch("getInfoMotos");
  },
  computed: {
    InfoMotos() {
      return this.$store.state.InfoMotos;
    }
  },
  methods:{

    motosToBrand(brandSelected){
      this.$store.dispatch('getBrand', { brandSelected });
    },
    getPrice(priceA, priceB){
      this.$store.dispatch('getPrice', { priceA , priceB})
    },
     getType(typeSelected){
      this.$store.dispatch('getType', { typeSelected })
    },
    getDisplacement(displacementA, displacementB){
      this.$store.dispatch('getDisplacement', {displacementA, displacementB})
    }

  },

  components:{
    FiltersMotosInfo,
    MotosArticles,
    Article,

    Brand

  }

}
</script>

<style>

</style>
