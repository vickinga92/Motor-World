<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

  <Filters></Filters>
  <MotosArticles></MotosArticles>
  <Brand></Brand>

</div>
</template>

<script>
import Filters from '@/components/Filters'
import MotosArticles from '@/components/MotosArticles'
import Brand from '@/components/Brand'



export default {
  name: "Motos",
  data(){
    return{

    }
  },

  components:{
    Filters,
    MotosArticles,
    Brand

  }

}
</script>

<style>

</style>
