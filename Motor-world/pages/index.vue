<template>
<div>
  <Showcase></Showcase>
  <Article></Article>
  </div>
</template>

<script>
import Article from '@/components/Article'
import Showcase from '@/components/Showcase'



export default {
  name:"index",
  data(){
    return{

    }
  },

components: {
  Article,
  Showcase
  }
}
</script>

<style>

</style>
