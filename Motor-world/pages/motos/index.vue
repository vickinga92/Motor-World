<template>
<div>
    <h2 class="firtsTitle text-center">Motos por Marcas</h2>

    <Type></Type>
  <MotosArticles></MotosArticles>

</div>
</template>

<script>
import Type from '@/components/Type'
import MotosArticles from '@/components/MotosArticles'


export default {
  name: "Motos",
  data(){
    return{

    }
  },

  components:{
    Type,
    MotosArticles,

  }

}
</script>

<style>

</style>
