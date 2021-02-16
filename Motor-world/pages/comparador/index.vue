<template>
<div>
<h1>Comparador de Motos</h1>
  <Comparador @change="añadirOne"></Comparador>


</div>

</template>

<script>
import Comparador from '@/components/Comparador'


export default {
  name:"comparador",
  data(){
    return{

    }
  },
methods:{
  añadirOne(modelSelected1){
      this.$store.dispatch('añadirOne', {modelSelected1});

    },
 async añadirOne() {

      try {
        let modelMoto = await this.$axios.get(
          `http://localhost:8083/comparador/${this.one.model1}`
        );

        console.log("respuesta-------------", modelMoto.data);
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    },
    async añadirTwo(item) {
      try {
        let response = await this.$axios.get(
          `http://localhost:8083/comparador/${this.model2}`
        );
        console.log("respuesta-------------", response.data);
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    }
  },
components:{
  Comparador,
}

}
</script>

<style>

</style>
