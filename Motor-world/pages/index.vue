<template>
<div>
  <Showcase></Showcase> <br>
  <Article></Article> <br>
  <Brand></Brand>
  </div>
</template>

<script>
import Article from '@/components/Article'
import Showcase from '@/components/Showcase'
import Brand from '@/components/Brand'




export default {
  name:"index",
  data(){
    return{

    }
  },

components: {
  Article,
  Showcase,
  Brand
  }
}
</script>

<style>

</style>
