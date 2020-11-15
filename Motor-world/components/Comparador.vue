<template>
  <div class="comparadorBox container">
    <div class="row">
      <div class="comparador1 col-sm-5">
        <p class="">Primera Moto</p>
        <img src="/images/z_nofoto.png" alt="Vehículo" />

        <div id="">
          <select name="" id="" class="">
            <option selected="selected" value="0">Selecciona una marca</option>
            <option value="" v-for="item in brands" :key="item.id">
              {{ item.brand }}
            </option>
          </select>
          <select name="" id="" class="">
            <option selected="selected" value="0">
              Selecciona un combustible
            </option>
            <option value="3">Eléctrico</option>
            <option value="2">Gasolina</option>
          </select>

          <input type="text" placeholder="Escribe un modelo" />
        </div>

        <div id="">
          <button id="" class="">Añadir a comparador</button>
        </div>
      </div>
      <div class="comparador2 col-sm-5">
        <p class="">Segunda Moto</p>
        <img src="/images/z_nofoto.png" alt="Vehículo" />

        <div id="">
          <select name="" id="" class="">
            <option selected="selected" value="0">Selecciona una marca</option>
            <option value="" v-for="item in brands" :key="item.id">
              {{ item.brand }}
            </option>
          </select>
          <select name="" id="" class="">
            <option selected="selected" value="0">
              Selecciona un combustible
            </option>
            <option value="3">Eléctrico</option>
            <option value="2">Gasolina</option>
          </select>

          <input type="text" placeholder="Escribe un modelo" />
        </div>

        <div id="">
          <button id="" class="">Añadir a comparador</button>
        </div>
      </div>

    </div>
     <div >
        <button class="btn-comparador">COMPARAR MODELOS</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { id: "ACCESS", brand: "ACCESS" },
        { id: "ADIVA", brand: "ADIVA" },
        { id: "ADLY", brand: "ADLY" },
        { id: "AEON", brand: "AEON" },
        { id: "AIE", brand: "AIE" },
        { id: "AIYUMO", brand: "AIYUMO" },
        { id: "AJP", brand: "AJP" },
        { id: "ALFER", brand: "ALFER" },
        { id: "ALPINA RENANIA", brand: "ALPINA RENANIA" },
        { id: "AMERICAN IRONHORSE", brand: "AMERICAN IRONHORSE" },
        { id: "APACHE", brand: "APACHE" },
        { id: "APOLLO ORION", brand: "APOLLO ORION" },
        { id: "APRILIA", brand: "APRILIA" },
        { id: "ARCTIC CAT", brand: "ARCTIC CAT" },
        { id: "ASIAWING", brand: "ASIAWING" },
        { id: "ASKOLL", brand: "ASKOLL" },
        { id: "ASTOR", brand: "ASTOR" },
        { id: "ATALA", brand: "ATALA" },
        { id: "AX ROAD", brand: "AX ROAD" },
        { id: "AZEL", brand: "AZEL" },
        { id: "BAJAJ", brand: "BAJAJ" },
        { id: "BAOTIAN", brand: "BAOTIAN" },
        { id: "BAROSSA", brand: "BAROSSA" },
        { id: "BATERY", brand: "BATERY" },
        { id: "BENELLI", brand: "BENELLI" },
        { id: "BERECO", brand: "BERECO" },
        { id: "BETA", brand: "BETA" },
        { id: "BIG DOG", brand: "BIG DOG" },
        { id: "BIMOTA", brand: "BIMOTA" },
        { id: "BMW", brand: "BMW" },
        { id: "BOSS HOSS", brand: "BOSS HOSS" },
        { id: "BRAMMO", brand: "BRAMMO" },
        { id: "BRIXTON", brand: "BRIXTON" },
        { id: "BRP", brand: "BRP" },
        { id: "SG ELECTRICS", brand: "BSG ELECTRICS" },
        { id: "BTM", brand: "BTM" },
        { id: "BUCCIMOTO", brand: "BUCCIMOTO" },
        { id: "BUELL", brand: "BUELL" },
        { id: "BULTACO", brand: "BULTACO" },
        { id: "BUNKER TRIKE", brand: "BUNKER TRIKE" },
        { id: "CAGIVA", brand: "CAGIVA" },
        { id: "CAN-AM", brand: "CAN-AM" },
        { id: "CANNONDALE", brand: "CANNONDALE" },
        { id: "CANYON", brand: "CANYON" },
        { id: "CBK", brand: "CBK" },
        { id: "CFMOTO", brand: "CFMOTO" },
        { id: "CHOPPER NATION", brand: "CHOPPER NATION" },
        { id: "CLARAXAVI", brand: "CLARAXAVI" },
        { id: "CLIPIC", brand: "CLIPIC" },
        { id: "COLIBRI", brand: "COLIBRI" },
        { id: "COOLTRA", brand: "COOLTRA" },
        { id: "CPI", brand: "CPI" },
        { id: "2000", brand: "CSR" },
        { id: "DAELIM", brand: "DAELIM" },
        { id: "DAK", brand: "DAK" },
        { id: "2249", brand: "DAYUN" },
        { id: "DERBI", brand: "DERBI" },
        { id: "DH HAOTIAN", brand: "DH HAOTIAN" },
        { id: "DINO", brand: "DINO" },
        { id: "DOBO", brand: "DOBO" },
        { id: "DORTON", brand: "DORTON" },
        { id: "DRAGON TT", brand: "DRAGON TT" },
        { id: "DUCATI", brand: "DUCATI" },
        { id: "EASY TRIKE", brand: "EASY TRIKE" },
        { id: "EBROH", brand: "EBROH" },
        { id: "ECOOTER", brand: "ECOOTER" },
        { id: "EFUN", brand: "EFUN" },
        { id: "ELECTRIC CITY MOTOR 00", brand: "ELECTRIC CITY MOTOR 00" },
        { id: "ELMOTO", brand: "ELMOTO" },
        { id: "E-MAX", brand: "E-MAX" },
        { id: "EMF", brand: "EMF" },
        { id: "EMOCYCLES", brand: "EMOCYCLES" },
        { id: "ENERGICA", brand: "ENERGICA" },
        { id: "E-TON", brand: "E-TON" },
        { id: "EXPLORER", brand: "EXPLORER" },
        { id: "FACTORY BIKE", brand: "FACTORY BIKE" },
        { id: "FANTIC", brand: "FANTIC" },
        { id: "FAURO", brand: "FAURO" },
        { id: "FAZTEK", brand: "FAZTEK" },
        { id: "FB MONDIAL", brand: "FB MONDIAL" },
        { id: "FKM", brand: "FKM" },
        { id: "GARELLI", brand: "GARELLI" },
        { id: "GAS GAS", brand: "GAS GAS" },
        { id: "GENERIC", brand: "GENERIC" },
        { id: "GILERA", brand: "GILERA" },
        { id: "GOELIX", brand: "GOELIX" },
        { id: "GOES", brand: "GOES" },
        { id: "GOWINN", brand: "GOWINN" },
        { id: "HAMMEL", brand: "HAMMEL" },
        { id: "HANWAY", brand: "HANWAY" },
        { id: "HARLEY DAVIDSON", brand: "HARLEY DAVIDSON" },
        { id: "HELECTRA", brand: "HELECTRA" },
        { id: "HERALD", brand: "HERALD" },
        { id: "HM", brand: "HM" },
        { id: "HONDA", brand: "HONDA" },
        { id: "HORWIN", brand: "HORWIN" },
        { id: "HRD", brand: "HRD" },
        { id: "HSUN", brand: "HSUN" },
        { id: "HUATIAN", brand: "HUATIAN" },
        { id: "HUDSON BOSS", brand: "HUDSON BOSS" },
        { id: "HUSABERG", brand: "HUSABERG" },
        { id: "HUSQVARNA", brand: "HUSQVARNA" },
        { id: "HYOSUNG", brand: "HYOSUNG" },
        { id: "IMAX", brand: "IMAX" },
        { id: "I-MOTO", brand: "I-MOTO" },
        { id: "IMR", brand: "IMR" },
        { id: "INDIAN", brand: "INDIAN" },
        { id: "INFMOTO", brand: "INFMOTO" },
        { id: "INNOCENTI", brand: "INNOCENTI" },
        { id: "INVICTA", brand: "INVICTA" },
        { id: "IOTOSTARK", brand: "IOTOSTARK" },
        { id: "ITALJET", brand: "ITALJET" },
        { id: "JIANSHE", brand: "JIANSHE" },
        { id: "JIN LUN", brand: "JIN LUN" },
        { id: "JINCHENG", brand: "JINCHENG" },
        { id: "JNEN", brand: "JNEN" },
        { id: "JONWAY", brand: "JONWAY" },
        { id: "JTG", brand: "JTG" },
        { id: "JTS", brand: "JTS" },
        { id: "KANGXIN", brand: "KANGXIN" },
        { id: "KASEA", brand: "KASEA" },
        { id: "KAWASAKI", brand: "KAWASAKI" },
        { id: "KAZUMA", brand: "KAZUMA" },
        { id: "KEEWAY", brand: "KEEWAY" },
        { id: "KENROD", brand: "KENROD" },
        { id: "KINROAD", brand: "KINROAD" },
        { id: "KSR MOTO", brand: "KSR MOTO" },
        { id: "KTM", brand: "KTM" },
        { id: "KUBERG", brand: "KUBERG" },
        { id: "KYMCO", brand: "KYMCO" },
        { id: "LAMBRETTA", brand: "LAMBRETTA" },
        { id: "LANVERTTI", brand: "LANVERTTI" },
        { id: "LEM", brand: "LEM" },
        { id: "LEMEV", brand: "LEMEV" },
        { id: "LEONART", brand: "LEONART" },
        { id: "LEXMOTO", brand: "LEXMOTO" },
        { id: "LIFAN", brand: "LIFAN" },
        { id: "LING BEN", brand: "LING BEN" },
        { id: "LINHAI", brand: "LINHAI" },
        { id: "LML", brand: "LML" },
        { id: "LUBE", brand: "LUBE" },
        { id: "LVNENG", brand: "LVNENG" },
        { id: "MACBOR", brand: "MACBOR" },
        { id: "MALAGUTI", brand: "MALAGUTI" },
        { id: "MALCOR", brand: "MALCOR" },
        { id: "MASAI", brand: "MASAI" },
        { id: "MASH", brand: "MASH" },
        { id: "MBK", brand: "MBK" },
        { id: "MECATECNO", brand: "MECATECNO" },
        { id: "MEGELLI", brand: "MEGELLI" },
        { id: "MEKO", brand: "MEKO" },
        { id: "MERLIN", brand: "MERLIN" },
        { id: "METRAKIT", brand: "METRAKIT" },
        { id: "MH MOTORCYCLES", brand: "MH MOTORCYCLES" },
        { id: "MINELLI", brand: "MINELLI" },
        { id: "MITT", brand: "MITT" },
        { id: "MOBILETTE", brand: "MOBILETTE" },
        { id: "MODEN", brand: "MODEN" },
        { id: "MONKEY BIKE", brand: "MONKEY BIKE" },
        { id: "MONSTER PRO", brand: "MONSTER PRO" },
        { id: "MONTEROSSO", brand: "MONTEROSSO" },
        { id: "MONTESA", brand: "MONTESA" },
        { id: "MORIWAKI", brand: "MORIWAKI" },
        { id: "MOTIVAS", brand: "MOTIVAS" },
        { id: "MOTO GUZZI", brand: "MOTO GUZZI" },
        { id: "MOTO MORINI", brand: "MOTO MORINI" },
        { id: "MOTOGAC", brand: "MOTOGAC" },
        { id: "MOTOR HISPANIA", brand: "MOTOR HISPANIA" },
        { id: "MOTOR MANIA", brand: "MOTOR MANIA" },
        { id: "MTM", brand: "MTM" },
        { id: "MTR", brand: "MTR" },
        { id: "MUZ", brand: "MUZ" },
        { id: "MV AGUSTA", brand: "MV AGUSTA" },
        { id: "MXONDA", brand: "MXONDA" },
        { id: "NECO", brand: "NECO" },
        { id: "NEXT", brand: "NEXT" },
        { id: "NIMOTO", brand: "NIMOTO" },
        { id: "NIU", brand: "NIU" },
        { id: "NORTON", brand: "NORTON" },
        { id: "ORCAL", brand: "ORCAL" },
        { id: "ORION", brand: "ORION" },
        { id: "OSET", brand: "OSET" },
        { id: "OSSA", brand: "OSSA" },
        { id: "PEDA", brand: "PEDA" },
        { id: "PEUGEOT", brand: "PEUGEOT" },
        { id: "PGO", brand: "PGO" },
        { id: "PIAGGIO", brand: "PIAGGIO" },
        { id: "POLINI", brand: "POLINI" },
        { id: "PUCH", brand: "PUCH" },
        { id: "QINGQI", brand: "QINGQI" },
        { id: "QOODER", brand: "QOODER" },
        { id: "QUADRO", brand: "QUADRO" },
        { id: "QUANTYA", brand: "QUANTYA" },
        { id: "QUAZZAR", brand: "QUAZZAR" },
        { id: "RAV", brand: "RAV" },
        { id: "RAYDAN", brand: "RAYDAN" },
        { id: "REBEL", brand: "REBEL" },
        { id: "RENAULT", brand: "RENAULT" },
        { id: "RETTO", brand: "RETTO" },
        { id: "REWACO", brand: "REWACO" },
        { id: "RIDLEY MOTORCYCLES", brand: "RIDLEY MOTORCYCLES" },
        { id: "RIEJU", brand: "RIEJU" },
        { id: "RIEJU NUUK", brand: "RIEJU NUUK" },
        { id: "RIYA", brand: "RIYA" },
        { id: "ROAN", brand: "ROAN" },
        { id: "ROKETA MOTO", brand: "ROKETA MOTO" },
        { id: "ROYAL ALLOY", brand: "ROYAL ALLOY" },
        { id: "ROYAL ENFIELD", brand: "ROYAL ENFIELD" },
        { id: "RSX", brand: "RSX" },
        { id: "SACHS BIKES", brand: "SACHS BIKES" },
        { id: "SAMADA", brand: "SAMADA" },
        { id: "SANBEN", brand: "SANBEN" },
        { id: "SANYOU", brand: "SANYOU" },
        { id: "SCOMADI", brand: "SCOMADI" },
        { id: "SCOOLECTRIX", brand: "SCOOLECTRIX" },
        { id: "SCORPA", brand: "SCORPA" },
        { id: "SCUTUM", brand: "SCUTUM" },
        { id: "SENKE", brand: "SENKE" },
        { id: "SETTER", brand: "SETTER" },
        { id: "SHERCO", brand: "SHERCO" },
        { id: "SHINERAY", brand: "SHINERAY" },
        { id: "SIAM", brand: "SIAM" },
        { id: "SILENCE", brand: "SILENCE" },
        { id: "SINCRO", brand: "SINCRO" },
        { id: "SINGAZ", brand: "SINGAZ" },
        { id: "SKYTEAM", brand: "SKYTEAM" },
        { id: "SUMCO", brand: "SUMCO" },
        { id: "SUMO", brand: "SUMO" },
        { id: "SUNRA", brand: "SUNRA" },
        { id: "SUPER SOCO", brand: "SUPER SOCO" },
        { id: "SUZUKI", brand: "SUZUKI" },
        { id: "SWM", brand: "SWM" },
        { id: "SYM", brand: "SYM" },
        { id: "TBQ", brand: "TBQ" },
        { id: "TGB", brand: "TGB" },
        { id: "2177", brand: "THUNDER MOUNTAIN" },
        { id: "TM", brand: "TM" },
        { id: "TORROT", brand: "TORROT" },
        { id: "TRAKKER", brand: "TRAKKER" },
        { id: "TRIUMPH", brand: "TRIUMPH" },
        { id: "TRS MOTORCYCLES", brand: "TRS MOTORCYCLES" },
        { id: "TURBHO", brand: "TURBHO" },
        { id: "UM", brand: "UM" },
        { id: "UNIVERSAL MOTOR", brand: "UNIVERSAL MOTOR" },
        { id: "UNORACING", brand: "UNORACING" },
        { id: "URAL", brand: "URAL" },
        { id: "URBAN ELECTRIC MOTORS", brand: "URBAN ELECTRIC MOTORS" },
        { value: "VECTRIX", brand: "VECTRIX" },
        { value: "VELIMOTOR", brand: "VELIMOTOR" },
        { value: "VERTIGO", brand: "VERTIGO" },
        { value: "VESPA", brand: "VESPA" },
        { value: "VESPINO", brand: "VESPINO" },
        { value: "VIA SCOOTER", brand: "VIA SCOOTER" },
        { value: "VICTORY", brand: "VICTORY" },
        { value: "VIGAR", brand: "VIGAR" },
        { value: "VIKERS", brand: "VIKERS" },
        { value: "VMOTO", brand: "VMOTO" },
        { value: "VOGE", brand: "VOGE" },
        { value: "VOLTA MOTORBIKES", brand: "VOLTA MOTORBIKES" },
        { value: "VOR", brand: "VOR" },
        { value: "VOXAN", brand: "VOXAN" },
        { value: "WILDLANDER", brand: "WILDLANDER" },
        { value: "WK", brand: "WK" },
        { value: "WOTTAN", brand: "WOTTAN" },
        { value: "XERO", brand: "XERO" },
        { value: "XINGYUE", brand: "XINGYUE" },
        { value: "XISPA", brand: "XISPA" },
        { value: "XMOTOS", brand: "XMOTOS" },
        { value: "XPA", brand: "XPA" },
        { value: "YAMAHA", brand: "YAMAHA" },
        { value: "YCF", brand: "YCF" },
        { value: "YIYING", brand: "YIYING" },
        { value: "YMR", brand: "YMR" },
        { value: "YOUNG RIDER", brand: "YOUNG RIDER" },
        { value: "ZELTECH", brand: "ZELTECH" },
        { value: "ZERO", brand: "ZERO" },
        { value: "ZERO MOTORCYCLES", brand: "ZERO MOTORCYCLES" },
        { value: "ZNEN", brand: "ZNEN" },
        { value: "ZONGSHEN", brand: "ZONGSHEN" },
        { value: "ZONTES", brand: "ZONTES" },
        { value: "ZUAP", brand: "ZUAP" },
      ],
    };
  },
};
</script, brand:"

<style>
</style>
