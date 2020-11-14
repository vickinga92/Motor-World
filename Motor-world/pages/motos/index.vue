<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

  <FiltersMotosInfo></FiltersMotosInfo>
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
    mounted(){
    this.getBrand
  },

  methods:{
    getBrand(brandSelected){
      this.$store.dispatch('getBrand');

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
