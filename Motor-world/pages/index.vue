<template>
<div>
  <Article></Article>


  </div>
</template>

<script>
import Article from '@/components/Article'
import Filters2HandMotos from '@/components/Filters2HandMotos'



export default {
  name:"index",
  data(){
    return{
    }
  },

  /*  async getBrand(brandSelected){
       try {
          let brand = await this.$axios.get(
            `http://localhost:8082/post/filter-brand`,
            );
          console.log("respuesta", brand.data);

        } catch (err) {
          console.log("no se conecta", err.response.data.error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La marca que buscas no se encuentra!",
          });
        }
    } */


components: {
  Article,
  Filters2HandMotos,


  }
}
</script>

<style>

</style>
