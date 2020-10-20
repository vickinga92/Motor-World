<template>
<div>
  <Showcase></Showcase> <br>
  <Article></Article> <br>
  <Brand></Brand>
  <div @getBrand="getBrand(item)"></div>
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
      motosBrand:{
        title:"",
    desc:"",
    brand:"",
    type:"",
    model:"",
    price:"",
    motor:"",
    cycle:"",
    cylinders:"",
    valves:"",
    distribution:"",
    displacement:"",
    diameter:"",
    maximum_power:"",
    par:"",
    feeding:"",
    refrigeration:"",
    start:"",
    clutch:"",
    gearshift:"",
    distance_axis:"",
    seat_heigth:"",
    deposit:"",
    weight:"",
    homologation:"",
    chasis:"",
    front_suspension:"",
    rear_suspension:"",
    front_brake:"",
    back_brake:"",
    front_tire:"",
    rear_tire:"",
    tires:""
      }
    }
  },
  mounted(){
    this.getBrand()
  },
   methods:{
    async getBrand(item){
    try {
      let response = await this.$axios.get(`http://localhost:8082/motos/${this.$route.params.brand}`);
      this.motosBrand = response.data;

      console.log("cogiendo marca yaaa-------", this.motosBrand)
    } catch (err) {
        console.log("no se conecta", err.response);
    }
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
