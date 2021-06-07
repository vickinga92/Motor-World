<template>
<div>
  <Shop></Shop>
  <Article></Article>
  </div>
</template>


<script>
import Article from '@/components/Article'
import Filters2HandMotos from '@/components/Filters2HandMotos'
import Shop from '@/components/Shop'

export default {
  name:"index",
  data(){
    return{
    }
  },

components: {
  Article,
  Filters2HandMotos,
   Shop



  }
}
</script>

<style>

</style>
