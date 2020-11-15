<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

  <FiltersMotosInfo @change="motosToBrand"></FiltersMotosInfo>
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
      this.$store.dispatch('getBrand', {brandSelected});

    },
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
