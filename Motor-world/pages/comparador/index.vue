<template>
<div>
<h1>Comparador de Motos</h1>

  <Comparador @filters="filterSelected" v-for="item in models"
    :key="item.id"
   :model="item.model"
   :image1="item.image"

  ></Comparador>


</div>

</template>

<script>
import Comparador from '@/components/Comparador'


export default {
  name:"comparador",
  data(){
    return{
      models:{
        model:"",
        image1:""

      }
    }
  },
methods:{

  async filterSelected() {
      try {
        let info = await this.$axios.get(`http://localhost:8083/motos/filters`);
        this.models = info.data;
        console.log("------------------esta entrando", this.models);
      } catch (err) {
        console.log(err);
        }
        }
      },

 async comparar() {

      try {
        let modelMoto = await this.$axios.get(
          `http://localhost:8083/motos/${this.model1}`
        );

        console.log("respuesta-------------", modelMoto.data);
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    },
    async añadirTwo(item) {
      try {
        let response = await this.$axios.get(
          `http://localhost:8083/motos/${this.model2}`
        );
        console.log("respuesta-------------", response.data);
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    },
components:{
  Comparador,
}

}
</script>

<style>

</style>
