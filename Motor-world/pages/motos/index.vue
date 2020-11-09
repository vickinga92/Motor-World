<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

  <Type></Type>
  <MotosArticles></MotosArticles>
  <Brand></Brand>

</div>
</template>

<script>
import Type from '@/components/Type'
import MotosArticles from '@/components/MotosArticles'
import Brand from '@/components/Brand'



export default {
  name: "Motos",
  data(){
    return{

    }
  },

  components:{
    Type,
    MotosArticles,
    Brand

  }

}
</script>

<style>

</style>
