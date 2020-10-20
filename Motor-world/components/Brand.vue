<template>
  <div>
    <h2 class="text-center">Marcas más buscadas</h2>
    <button @click.prevent="getBrand(item)" class="brand" v-for="item in brands" :key="item.id">{{item.brand}}</button>

  </div>
</template>

<script>
export default {
  data(){
    return{
      brands:[
        {id:1, brand:"APRILIA"},
        {id:2, brand:"BENELLI"},
        {id:3, brand:"BETA"},
        {id:4, brand:"BMW"},
        {id:5, brand:"DAELIM"},
        {id:6, brand:"DERBI"},
        {id:7, brand:"DUCATI"},
        {id:8, brand:"GAS GAS"},
        {id:9, brand:"HARLEY DAVINSON"},
        {id:10, brand:"HONDA"},
        {id:11, brand:"HYOSUNG"},
        {id:12, brand:"KAWASAKI"},
        {id:13, brand:"KEEWAY"},
        {id:14, brand:"KTM"},
        {id:15, brand:"KYMCO"},
        {id:16, brand:"MOTO GUZZI"},
        {id:17, brand:"PEUGEOT"},
        {id:18, brand:"PIAGIO"},
        {id:19, brand:"RIEJU"},
        {id:20, brand:"SUZUKI"},
        {id:21, brand:"SYM"},
        {id:22, brand:"TRIUMPH"},
        {id:23, brand:"VESPA"},
        {id:24, brand:"YAMAHA"},


      ]
    }
  },
  methods:{
    getBrand(item){
      this.brands = item.brand
      this.$router.push(`motos/${this.brands}`)
    }
  }
}
</script>

<style>

</style>
