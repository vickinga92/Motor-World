<template>
  <div>
    <div class="container-fluid ficha">
        <FichaTecnicaMotos
      v-for="item in FichaMotos"
      :key="item.id"
      :_id="item._id"
      :image="item.image"
      :title="item.title"
      :desc="item.desc"
      :brand="item.brand"
      :type="item.type"
      :model="item.model"
      :price="item.price"
      :motor="item.motor"
      :cycle="item.cycle"
      :cylinders="item.cylinders"
      :valves="item.valves"
      :distribution="item.distribution"
      :displacement="item.displacement"
      :diameter="item.diameter"
      :maximum_power="item.maximum_power"
      :par="item.par"
      :feeding="item.feeding"
      :refrigeration="item.refrigeration"
      :start="item.start"
      :clutch="item.clutch"
      :gearshift="item.gearshift"
      :distance_axis="item.distance_axis"
      :seat_heigth="item.seat_heigth"
      :deposit="item.deposit"
      :weight="item.weight"
      :homologation="item.homologation"
      :chasis="item.chasis"
      :front_suspension="item.front_suspension"
      :rear:suspension="item.rear_suspension"
      :front_brake="item.front_brake"
      :back_brake="item.back_brake"
      :front_tire="item.front_tire"
      :rear_tire="item.rear_tire"
      :tires="item.tires"
    ></FichaTecnicaMotos>

    </div>

  </div>
</template>

<script>
import FichaTecnicaMotos from "@/components/FichaTecnicaMotos";
export default {
  name: "",
  data() {
    return {
      FichaMotos: {    
    image:"",
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
    };
  },
  mounted(){
    this.getInfoMotos()
  },
  methods: {
    async getInfoMotos() {
      try {
        let info = await this.$axios.get(`http://localhost:8083/motos/${this.$route.params.id}`);
        this.FichaMotos = info.data;
        console.log("------------------esta entrando", this.FichaMotos);
      } catch (err) {
        console.log(err);

      }
    },
  },
  components: {
    FichaTecnicaMotos,
  },
};

</script>

<style>
</style>

