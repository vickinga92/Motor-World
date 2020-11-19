<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

  <FiltersMotosInfo
  @brand="motosToBrand"
  @priceA="priceA"
  @priceB="priceB"
  @type="getType"
  ></FiltersMotosInfo>
  <MotosArticles></MotosArticles>
  <Brand></Brand>

</div>
</template>

<script>
import FiltersMotosInfo from '@/components/FiltersMotosInfo'
import MotosArticles from '@/components/MotosArticles'
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
    priceA(priceDesdeSelected){
      this.$store.dispatch('getPriceA', { priceDesdeSelected })
    },
    priceB(priceHastaSelected){
      this.$store.dispatch('getPriceB', { priceHastaSelected })
    },
    getType(typeSelected){
      this.$store.dispatch('getType', { typeSelected })
    }
  },

  components:{
    FiltersMotosInfo,
    MotosArticles,
    Brand

  }

}
</script>

<style>

</style>
