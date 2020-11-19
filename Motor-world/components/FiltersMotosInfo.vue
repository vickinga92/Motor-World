<template>
  <div class="container-fluid">
    <div class="typeMotos">
    <form class="Anunce">
      <div  class="form-group mx-sm-3">
        <label class="">MARCA</label>
        <select  v-model="brandSelected" name="brand" placeholder="Selecciona una marca" class="filters" @change="getBrand">
          <option selected="selected" value="undefined" disabled>
            Selecciona una marca
          </option>
          <option value="ACCESS">ACCESS</option>
          <option value="ADIVA">ADIVA</option>
          <option value="ADLY">ADLY</option>
          <option value="AEON">AEON</option>
          <option value="AIE">AIE</option>
          <option value="AIYUMO">AIYUMO</option>
          <option value="AJP">AJP</option>
          <option value="ALFER">ALFER</option>
          <option value="ALPINA RENANIA">ALPINA RENANIA</option>
          <option value="AMERICAN IRONHORSE">AMERICAN IRONHORSE</option>
          <option value="APACHE">APACHE</option>
          <option value="APOLLO ORION">APOLLO ORION</option>
          <option value="APRILIA">APRILIA</option>
          <option value="ARCTIC CAT">ARCTIC CAT</option>
          <option value="ASIAWING">ASIAWING</option>
          <option value="ASKOLL">ASKOLL</option>
          <option value="ASTOR">ASTOR</option>
          <option value="ATALA">ATALA</option>
          <option value="AX ROAD">AX ROAD</option>
          <option value="AZEL">AZEL</option>
          <option value="BAJAJ">BAJAJ</option>
          <option value="BAOTIAN">BAOTIAN</option>
          <option value="BAROSSA">BAROSSA</option>
          <option value="BATERY">BATERY</option>
          <option value="BENELLI">BENELLI</option>
          <option value="BERECO">BERECO</option>
          <option value="BETA">BETA</option>
          <option value="BIG DOG">BIG DOG</option>
          <option value="BIMOTA">BIMOTA</option>
          <option value="BMW">BMW</option>
          <option value="BOSS HOSS">BOSS HOSS</option>
          <option value="BRAMMO">BRAMMO</option>
          <option value="BRIXTON">BRIXTON</option>
          <option value="BRP">BRP</option>
          <option value="SG ELECTRICS">BSG ELECTRICS</option>
          <option value="BTM">BTM</option>
          <option value="BUCCIMOTO">BUCCIMOTO</option>
          <option value="BUELL">BUELL</option>
          <option value="BULTACO">BULTACO</option>
          <option value="BUNKER TRIKE">BUNKER TRIKE</option>
          <option value="CAGIVA">CAGIVA</option>
          <option value="CAN-AM">CAN-AM</option>
          <option value="CANNONDALE">CANNONDALE</option>
          <option value="CANYON">CANYON</option>
          <option value="CBK">CBK</option>
          <option value="CFMOTO">CFMOTO</option>
          <option value="CHOPPER NATION">CHOPPER NATION</option>
          <option value="CLARAXAVI">CLARAXAVI</option>
          <option value="CLIPIC">CLIPIC</option>
          <option value="COLIBRI">COLIBRI</option>
          <option value="COOLTRA">COOLTRA</option>
          <option value="CPI">CPI</option>
          <option value="2000">CSR</option>
          <option value="DAELIM">DAELIM</option>
          <option value="DAK">DAK</option>
          <option value="2249">DAYUN</option>
          <option value="DERBI">DERBI</option>
          <option value="DH HAOTIAN">DH HAOTIAN</option>
          <option value="DINO">DINO</option>
          <option value="DOBO">DOBO</option>
          <option value="DORTON">DORTON</option>
          <option value="DRAGON TT">DRAGON TT</option>
          <option value="DUCATI">DUCATI</option>
          <option value="EASY TRIKE">EASY TRIKE</option>
          <option value="EBROH">EBROH</option>
          <option value="ECOOTER">ECOOTER</option>
          <option value="EFUN">EFUN</option>
          <option value="ELECTRIC CITY MOTOR 00">ELECTRIC CITY MOTOR 00</option>
          <option value="ELMOTO">ELMOTO</option>
          <option value="E-MAX">E-MAX</option>
          <option value="EMF">EMF</option>
          <option value="EMOCYCLES">EMOCYCLES</option>
          <option value="ENERGICA">ENERGICA</option>
          <option value="E-TON">E-TON</option>
          <option value="EXPLORER">EXPLORER</option>
          <option value="FACTORY BIKE">FACTORY BIKE</option>
          <option value="FANTIC">FANTIC</option>
          <option value="FAURO">FAURO</option>
          <option value="FAZTEK">FAZTEK</option>
          <option value="FB MONDIAL">FB MONDIAL</option>
          <option value="FKM">FKM</option>
          <option value="GARELLI">GARELLI</option>
          <option value="GAS GAS">GAS GAS</option>
          <option value="GENERIC">GENERIC</option>
          <option value="GILERA">GILERA</option>
          <option value="GOELIX">GOELIX</option>
          <option value="GOES">GOES</option>
          <option value="GOWINN">GOWINN</option>
          <option value="HAMMEL">HAMMEL</option>
          <option value="HANWAY">HANWAY</option>
          <option value="HARLEY DAVIDSON">HARLEY DAVIDSON</option>
          <option value="HELECTRA">HELECTRA</option>
          <option value="HERALD">HERALD</option>
          <option value="HM">HM</option>
          <option value="HONDA">HONDA</option>
          <option value="HORWIN">HORWIN</option>
          <option value="HRD">HRD</option>
          <option value="HSUN">HSUN</option>
          <option value="HUATIAN">HUATIAN</option>
          <option value="HUDSON BOSS">HUDSON BOSS</option>
          <option value="HUSABERG">HUSABERG</option>
          <option value="HUSQVARNA">HUSQVARNA</option>
          <option value="HYOSUNG">HYOSUNG</option>
          <option value="IMAX">IMAX</option>
          <option value="I-MOTO">I-MOTO</option>
          <option value="IMR">IMR</option>
          <option value="INDIAN">INDIAN</option>
          <option value="INFMOTO">INFMOTO</option>
          <option value="INNOCENTI">INNOCENTI</option>
          <option value="INVICTA">INVICTA</option>
          <option value="IOTOSTARK">IOTOSTARK</option>
          <option value="ITALJET">ITALJET</option>
          <option value="JIANSHE">JIANSHE</option>
          <option value="JIN LUN">JIN LUN</option>
          <option value="JINCHENG">JINCHENG</option>
          <option value="JNEN">JNEN</option>
          <option value="JONWAY">JONWAY</option>
          <option value="JTG">JTG</option>
          <option value="JTS">JTS</option>
          <option value="KANGXIN">KANGXIN</option>
          <option value="KASEA">KASEA</option>
          <option value="KAWASAKI">KAWASAKI</option>
          <option value="KAZUMA">KAZUMA</option>
          <option value="KEEWAY">KEEWAY</option>
          <option value="KENROD">KENROD</option>
          <option value="KINROAD">KINROAD</option>
          <option value="KSR MOTO">KSR MOTO</option>
          <option value="KTM">KTM</option>
          <option value="KUBERG">KUBERG</option>
          <option value="KYMCO">KYMCO</option>
          <option value="LAMBRETTA">LAMBRETTA</option>
          <option value="LANVERTTI">LANVERTTI</option>
          <option value="LEM">LEM</option>
          <option value="LEMEV">LEMEV</option>
          <option value="LEONART">LEONART</option>
          <option value="LEXMOTO">LEXMOTO</option>
          <option value="LIFAN">LIFAN</option>
          <option value="LING BEN">LING BEN</option>
          <option value="LINHAI">LINHAI</option>
          <option value="LML">LML</option>
          <option value="LUBE">LUBE</option>
          <option value="LVNENG">LVNENG</option>
          <option value="MACBOR">MACBOR</option>
          <option value="MALAGUTI">MALAGUTI</option>
          <option value="MALCOR">MALCOR</option>
          <option value="MASAI">MASAI</option>
          <option value="MASH">MASH</option>
          <option value="MBK">MBK</option>
          <option value="MECATECNO">MECATECNO</option>
          <option value="MEGELLI">MEGELLI</option>
          <option value="MEKO">MEKO</option>
          <option value="MERLIN">MERLIN</option>
          <option value="METRAKIT">METRAKIT</option>
          <option value="MH MOTORCYCLES">MH MOTORCYCLES</option>
          <option value="MINELLI">MINELLI</option>
          <option value="MITT">MITT</option>
          <option value="MOBILETTE">MOBILETTE</option>
          <option value="MODEN">MODEN</option>
          <option value="MONKEY BIKE">MONKEY BIKE</option>
          <option value="MONSTER PRO">MONSTER PRO</option>
          <option value="MONTEROSSO">MONTEROSSO</option>
          <option value="MONTESA">MONTESA</option>
          <option value="MORIWAKI">MORIWAKI</option>
          <option value="MOTIVAS">MOTIVAS</option>
          <option value="MOTO GUZZI">MOTO GUZZI</option>
          <option value="MOTO MORINI">MOTO MORINI</option>
          <option value="MOTOGAC">MOTOGAC</option>
          <option value="MOTOR HISPANIA">MOTOR HISPANIA</option>
          <option value="MOTOR MANIA">MOTOR MANIA</option>
          <option value="MTM">MTM</option>
          <option value="MTR">MTR</option>
          <option value="MUZ">MUZ</option>
          <option value="MV AGUSTA">MV AGUSTA</option>
          <option value="MXONDA">MXONDA</option>
          <option value="NECO">NECO</option>
          <option value="NEXT">NEXT</option>
          <option value="NIMOTO">NIMOTO</option>
          <option value="NIU">NIU</option>
          <option value="NORTON">NORTON</option>
          <option value="ORCAL">ORCAL</option>
          <option value="ORION">ORION</option>
          <option value="OSET">OSET</option>
          <option value="OSSA">OSSA</option>
          <option value="PEDA">PEDA</option>
          <option value="PEUGEOT">PEUGEOT</option>
          <option value="PGO">PGO</option>
          <option value="PIAGGIO">PIAGGIO</option>
          <option value="POLINI">POLINI</option>
          <option value="PUCH">PUCH</option>
          <option value="QINGQI">QINGQI</option>
          <option value="QOODER">QOODER</option>
          <option value="QUADRO">QUADRO</option>
          <option value="QUANTYA">QUANTYA</option>
          <option value="QUAZZAR">QUAZZAR</option>
          <option value="RAV">RAV</option>
          <option value="RAYDAN">RAYDAN</option>
          <option value="REBEL">REBEL</option>
          <option value="RENAULT">RENAULT</option>
          <option value="RETTO">RETTO</option>
          <option value="REWACO">REWACO</option>
          <option value="RIDLEY MOTORCYCLES">RIDLEY MOTORCYCLES</option>
          <option value="RIEJU">RIEJU</option>
          <option value="RIEJU NUUK">RIEJU NUUK</option>
          <option value="RIYA">RIYA</option>
          <option value="ROAN">ROAN</option>
          <option value="ROKETA MOTO">ROKETA MOTO</option>
          <option value="ROYAL ALLOY">ROYAL ALLOY</option>
          <option value="ROYAL ENFIELD">ROYAL ENFIELD</option>
          <option value="RSX">RSX</option>
          <option value="SACHS BIKES">SACHS BIKES</option>
          <option value="SAMADA">SAMADA</option>
          <option value="SANBEN">SANBEN</option>
          <option value="SANYOU">SANYOU</option>
          <option value="SCOMADI">SCOMADI</option>
          <option value="SCOOLECTRIX">SCOOLECTRIX</option>
          <option value="SCORPA">SCORPA</option>
          <option value="SCUTUM">SCUTUM</option>
          <option value="SENKE">SENKE</option>
          <option value="SETTER">SETTER</option>
          <option value="SHERCO">SHERCO</option>
          <option value="SHINERAY">SHINERAY</option>
          <option value="SIAM">SIAM</option>
          <option value="SILENCE">SILENCE</option>
          <option value="SINCRO">SINCRO</option>
          <option value="SINGAZ">SINGAZ</option>
          <option value="SKYTEAM">SKYTEAM</option>
          <option value="SUMCO">SUMCO</option>
          <option value="SUMO">SUMO</option>
          <option value="SUNRA">SUNRA</option>
          <option value="SUPER SOCO">SUPER SOCO</option>
          <option value="SUZUKI">SUZUKI</option>
          <option value="SWM">SWM</option>
          <option value="SYM">SYM</option>
          <option value="TBQ">TBQ</option>
          <option value="TGB">TGB</option>
          <option value="2177">THUNDER MOUNTAIN</option>
          <option value="TM">TM</option>
          <option value="TORROT">TORROT</option>
          <option value="TRAKKER">TRAKKER</option>
          <option value="TRIUMPH">TRIUMPH</option>
          <option value="TRS MOTORCYCLES">TRS MOTORCYCLES</option>
          <option value="TURBHO">TURBHO</option>
          <option value="UM">UM</option>
          <option value="UNIVERSAL MOTOR">UNIVERSAL MOTOR</option>
          <option value="UNORACING">UNORACING</option>
          <option value="URAL">URAL</option>
          <option value="URBAN ELECTRIC MOTORS<">URBAN ELECTRIC MOTORS</option>
          <option value="VECTRIX">VECTRIX</option>
          <option value="VELIMOTOR">VELIMOTOR</option>
          <option value="VERTIGO">VERTIGO</option>
          <option value="VESPA">VESPA</option>
          <option value="VESPINO">VESPINO</option>
          <option value="VIA SCOOTER">VIA SCOOTER</option>
          <option value="VICTORY">VICTORY</option>
          <option value="VIGAR">VIGAR</option>
          <option value="VIKERS">VIKERS</option>
          <option value="VMOTO">VMOTO</option>
          <option value="VOGE">VOGE</option>
          <option value="VOLTA MOTORBIKES">VOLTA MOTORBIKES</option>
          <option value="VOR">VOR</option>
          <option value="VOXAN">VOXAN</option>
          <option value="WILDLANDER">WILDLANDER</option>
          <option value="WK">WK</option>
          <option value="WOTTAN">WOTTAN</option>
          <option value="XERO">XERO</option>
          <option value="XINGYUE">XINGYUE</option>
          <option value="XISPA">XISPA</option>
          <option value="XMOTOS">XMOTOS</option>
          <option value="XPA">XPA</option>
          <option value="YAMAHA">YAMAHA</option>
          <option value="YCF">YCF</option>
          <option value="YIYING">YIYING</option>
          <option value="YMR">YMR</option>
          <option value="YOUNG RIDER">YOUNG RIDER</option>
          <option value="ZELTECH">ZELTECH</option>
          <option value="ZERO">ZERO</option>
          <option value="ZERO MOTORCYCLES">ZERO MOTORCYCLES</option>
          <option value="ZNEN">ZNEN</option>
          <option value="ZONGSHEN">ZONGSHEN</option>
          <option value="ZONTES">ZONTES</option>
          <option value="ZUAP">ZUAP</option>
        </select>
      </div>
      <div  class="form-group mx-sm-3">
        <label for="">MODELO</label>
        <input type="text" placeholder="Escribe un modelo" class="filters">
      </div>

      <div class="form-group mx-sm-3">
        <label>PRECIO</label>
        <select
          name="priceA"
          placeholder="Selecciona el rango de precios"
          class="filters"
          v-model="priceDesdeSelected"
          @change="getPriceDesde"
        >
          <option  selected="selected" value="undefined" disabled>Desde</option>
          <option v-for="(item, d) in prices" :key="d">
            {{ item.price }}
          </option>
        </select>

        <select
          name="priceB"
          placeholder="Selecciona el rango de precios"
          class="filters"
           v-model="priceHastaSelected"
          @change="getPriceHasta"
        >
          <option selected="selected" value="undefined" disabled>Hasta</option>
          <option v-for="(item, h) in prices" :key="h">
            {{ item.price }}
          </option>
        </select>
      </div>
      <div  class="form-group mx-sm-3">
        <label class="">TIPO</label>
        <select name="tipo" class="filters"
        v-model="typeSelected"
          @change="getType">
          <option selected="selected" value="" disabled hidden>Todos</option>
          <option v-for="item in types" :key="item.id">{{item.type}}</option>
        </select>
      </div>

      <div  class="form-group mx-sm-3">
        <label for="">CILINDRADA</label>
   <select name="añoDesde" id="añoDesde" class="filters">
          <option selected="selected" value="" disabled hidden>Desde</option>
          <option v-for="(item, dd) in displacements" :key="dd">{{item.displacement}}</option>
        </select>
           <select name="añoHasta" class="filters">
          <option selected="selected" value="" disabled hidden>Hasta</option>
          <option v-for="(item, dh) in displacements" :key="dh">{{item.displacement}}</option>
        </select>
      </div>

      </form>
    </div>
  </div>

</template>
<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      prices: [
        { id: 1, price: "500" },
        { id: 1, price: "1000" },
        { id: 2, price: "2000" },
        { id: 3, price: "3000" },
        { id: 4, price: "4000" },
        { id: 5, price: "6000" },
        { id: 6, price: "8000" },
        { id: 7, price: "10000" },
        { id: 8, price: "15000" },
      ],
      types: [
        { id: 1, type: "SCOOTERS" },
        { id: 2, type: "CICLOMOTOR" },
        { id: 3, type: "SPORT" },
        { id: 4, type: "NAKED" },
        { id: 5, type: "SUPERMOTARD" },
        { id: 6, type: "ENDURO" },
        { id: 7, type: "TRAIL" },
      ],

      displacements:[
        {id:1, displacement: "49"},
        {id:2, displacement: "125"},
        {id:3, displacement: "250"},
        {id:4, displacement: "500"},
        {id:5, displacement: "600"},
        {id:6, displacement: "750"},
        {id:7, displacement: "1000"},
        {id:8, displacement: "1200"},
      ],

      brandSelected: this.value,
      priceDesdeSelected: this.value,
      priceHastaSelected: this.value,
      typeSelected: this.value,
    };
  },

  methods: {
    getBrand(brandSelected){
      this.$emit('brand', this.brandSelected)
    },
    getPriceDesde(priceDesdeSelected){
      this.$emit('priceA', this.priceDesdeSelected)
    },
     getPriceHasta(priceHastaSelected){
      this.$emit('priceB', this.priceHastaSelected)
    },
    getType(typeSelected){
      this.$emit('type', this.typeSelected)
    }

  },
};


</script>

<style>
</style>
