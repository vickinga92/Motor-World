//  @brand="motosToBrand"
//   @pricef="motosToPrice"
//   @type="motosToType"
//   @displacement="motosToDisplacement"
<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

 <FiltersMotosInfo
  @filters="motosToFilters"></FiltersMotosInfo>
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
    motosToFilters (brandSelected, priceA, priceB, typeSelected, displacementA, displacementB ){

        this.$store.dispatch('getFilters', { brandSelected, priceA , priceB, typeSelected, displacementA, displacementB });
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
