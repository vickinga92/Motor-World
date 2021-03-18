<template>
  <div class="container-fluid post">
    <div class="container">
      <div id="title-ad">      
      <h1 v-if="Ad._id === ''" class="text-center">PUBLICA TU ANUNCIO AQUÍ GRATIS</h1>
      <h1 v-else class="text-center">MODIFICA TU ANUNCIO</h1>
    </div>
    <br />
    <form class="Anunce">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <h2>Datos de contacto</h2>
            <div class="form-group mx-sm-3">
              <label for="inputUser" class="sr-only">Name</label>
              <input
                v-model="Ad.name"
                type="name"                
                class="form-control"
                id="name"
                placeholder="Nombre"             
               
              />
            </div>
            <div class="form-group mx-sm-3">
              <select
                v-model="Ad.province"
                name="Provinces"
                id="Provincias"
                class="form-control"
                placeholder="Provincia"
              >
                <option selected="selected" value="" disabled hidden>
                  Selecciona tu Provincia
                </option>
                <option value="A Coruña">A Coruña</option>
                <option value="Álava">Álava</option>
                <option value="Albacete">Albacete</option>
                <option value="Alicante">Alicante</option>
                <option value="Almería">Almería</option>
                <option value="Asturias">Asturias</option>
                <option value="Ávila">Ávila</option>
                <option value="Badajoz">Badajoz</option>
                <option value="Baleares">Baleares</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Burgos">Burgos</option>
                <option value="Cáceres">Cáceres</option>
                <option value="Cádiz">Cádiz</option>
                <option value="Cantabria">Cantabria</option>
                <option value="Castellón">Castellón</option>
                <option value="Ceuta">Ceuta</option>
                <option value="Ciudad Real">Ciudad Real</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Cuenca">Cuenca</option>
                <option value="Girona">Girona</option>
                <option value="Granada">Granada</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Guipúzcoa">Guipúzcoa</option>
                <option value="Huelva">Huelva</option>
                <option value="Huesca">Huesca</option>
                <option value="Jaén">Jaén</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Las Palmas">Las Palmas</option>
                <option value="León">León</option>
                <option value="Lleida">Lleida</option>
                <option value="Lugo">Lugo</option>
                <option value="Madrid">Madrid</option>
                <option value="Málaga">Málaga</option>
                <option value="Melilla">Melilla</option>
                <option value="Murcia">Murcia</option>
                <option value="Navarra">Navarra</option>
                <option value="Orense">Orense</option>
                <option value="Palencia">Palencia</option>
                <option value="Pontevedra">Pontevedra</option>
                <option value="Salamanca">Salamanca</option>
                <option value="Segovia">Segovia</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Soria">Soria</option>
                <option value="Sta. C. Tenerife">Sta. C. Tenerife</option>
                <option value="Tarragona">Tarragona</option>
                <option value="Teruel">Teruel</option>
                <option value="Toledo">Toledo</option>
                <option value="Valencia">Valencia</option>
                <option value="Valladolid">Valladolid</option>
                <option value="Vizcaya">Vizcaya</option>
                <option value="Zamora">Zamora</option>
                <option value="Zaragoza">Zaragoza</option>
              </select>
            </div>
            <div class="form-group mx-sm-3">
              <label for="Phone" class="sr-only">Teléfono</label>
              <input
                v-model="Ad.phone"
                type="phone"
                class="form-control"
                id="phone"
                placeholder="Móvil"
              />
            </div>
            <div class="form-group mx-sm-3">
              <label for="Email" class="sr-only">Email</label>
              <input
                v-model="Ad.email"
                type="Email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <h2>Datos del vehículo</h2>

            <div class="form-group mx-sm-3">
              <select
                v-model="Ad.brand"
                name="brand"
                id="Marca"
                class="form-control"
                placeholder="Selecciona una marca"
              >
                <option selected="selected" value="" disabled hidden>
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
                <option value="ELECTRIC CITY MOTOR 00">
                  ELECTRIC CITY MOTOR 00
                </option>
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
                <option value="URBAN ELECTRIC MOTORS<">
                  URBAN ELECTRIC MOTORS
                </option>
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
            <div class="form-group mx-sm-3">
              <input
                v-model="Ad.model"
                name="model"
                type="text"
                id="model"
                maxlength="6"
                class="form-control"
                placeholder="Modelo"
                tabindex="12"
              />

              <span class="unit-km">Modelo</span>
            </div>
            <div class="form-group mx-sm-3">
              <select name="tipo" id="type" class="form-control" v-model="Ad.type">
                <option selected="selected" value="" disabled hidden>
                  Selecciona el tipo
                </option>
                <option v-for="item in types" :key="item.id">
                  {{ item.type }}
                </option>
              </select>
            </div>
            <div class="form-group mx-sm-3">
              <select
                name="displacement"
                id="displacement"
                class="form-control"
                v-model="Ad.displacement"

              >
                <option selected="selected" value="" disabled hidden>
                  Selecciona la cilindrada
                </option>
                <option v-for="item in displacements" :key="item.id">
                  {{ item.displacement }}
                </option>
              </select>
            </div>
            <div class="form-group mx-sm-3">
              <select
                v-model="Ad.fuel"
                name="fuel"
                id="Combustible"
                class="form-control"
                tabindex="7"
              >
                <option value="" disabled hidden>
                  Selecciona el tipo de combustible
                </option>
                <option value="Gasolina">Gasolina</option>
                <option value="Eléctrico">Eléctrico</option>
              </select>
            </div>
            <div class="form-group mx-sm-3">
              <select
                v-model="Ad.age"
                name="age"
                id="age"
                class="form-control"
                tabindex="9"
              >
                <option selected="selected" value="" disabled hidden>
                  Selecciona el año
                </option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </div>
            <div class="form-group mx-sm-3">
              <input
                v-model="Ad.km"
                name="Km"
                type="text"
                id="Km"
                maxlength="6"
                class="form-control"
                placeholder="Kilómetros"
                tabindex="12"
              />
              <span class="unit-km">Km</span>
            </div>
            <div class="form-group mx-sm-3">
              <input
                v-model="Ad.color"
                name="Color"
                type="text"
                id="Color"
                class="form-control"
                maxlength="50"
                placeholder="Color"
                tabindex="13"
              />
            </div>
            <div class="form-group mx-sm-3">
              <input
                v-model="Ad.price"
                name="precio"
                type="text"
                id="precio"
                maxlength="7"
                class="form-control"
                placeholder="Precio"
                tabindex="14"
              />
              <span class="unit-price" style="font-weight: 100%">€</span>
            </div>
            <h2>Información adicional</h2>
            <div>
              <textarea
                name="desc"
                v-model="Ad.desc"
                placeholder="Agregue la descripción"
                class="form-control"
              ></textarea>
              <p class="alignright">
                <label id class="counter counter_chars"
                  >Quedan 1000 caracteres</label
                >
              </p>
            </div>
          </div>
          <div class="ad-2 col-6">
            <h2>DATOS TÉCNICOS DEL VEHÍCULO</h2>
            <div v-if="!image">
              <h2>Añade las fotos de tu vehículo</h2>
              <form action="/post" enctype="multipart/form-data" method="post">
                Selecciona las imágenes:
                <input
                  type="file"
                  name="uploaded_file"
                  multiple
                  @change="onFileChange"
                />
              </form>
            </div>
            <div v-else>
              <img class="imageBox" :src="image" />
              <button @click.prevent="removeImage">Remove image</button>
            </div>
          </div>

          <button v-if="Ad._id === ''"
            @click.prevent="saveToPost('new')"
            type="submit"
            class="btn btn-primary btn-ad"
          >
            Publicar el anuncio
          </button>
          <button v-else
            @click.prevent="saveToPost('edit')"
            type="submit"
            class="btn btn-primary btn-ad"
          >
            Editar el anuncio
          </button>
        </div>
      </div>
    </form>
  </div>

    </div>  
</template>

<script>
import Swal from "sweetalert2";
export default {
  
  name: "Post",
  data() {    
    const {
            _id = "",
            name = "", 
            province = "", 
            phone = "", 
            email = "", 
            brand = "",
            model = "", 
            type = "", 
            displacement = "", 
            fuel = "", 
            age = "", 
            km = "", 
            color = "",
            price = "", 
            desc = "", 
            image = "" } = this.$store.state.OnePost;

    return {
      displacements: [
        { id: 1, displacement: "49" },
        { id: 2, displacement: "125" },
        { id: 3, displacement: "250" },
        { id: 4, displacement: "500" },
        { id: 5, displacement: "600" },
        { id: 6, displacement: "750" },
        { id: 7, displacement: "1000" },
        { id: 8, displacement: "1200" },
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
      image,
      Ad: { _id, name, province, phone, email,
        brand, model, type, displacement,
        fuel, age, km, color, price, desc, image },
    };
  },
  watch: {
    name(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.name = value;
    },
    province(newValue) {
      this.$emit("select", newValue);
    },
    value(newValue) {
      this.province = value;
    },
    phone(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.phone = value;
    },
    email(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.email = value;
    },
    brand(newValue) {
      this.$emit("select", newValue);
    },
    value(newValue) {
      this.brand = value;
    },
    model(newValue){
      this.$emit("input", newValue)
    },
    value(newValue){
      this.model = value;
    },
    type(newValue) {
      this.$emit("select", newValue);
    },
    value(newValue) {
      this.type = value;
    },
     displacement(newValue) {
      this.$emit("select", newValue);
    },
    value(newValue) {
      this.displacement = value;
    },
    fuel(newValue) {
      this.$emit("select", newValue);
    },
    value(newValue) {
      this.fuel = value;
    },
    age(newValue) {
      this.$emit("select", newValue);
    },
    value(newValue) {
      this.age = value;
    },
    km(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.km = value;
    },
    color(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.color = value;
    },
    price(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.price = value;
    },
    desc(newValue) {
      this.$emit("textarea", newValue);
    },
    value(newValue) {
      this.desc = value;
    },
  },
  methods: {
    name() {
      this.$emit("change", this.name);
    },
    province() {
      this.$emit("change", this.province);
    },
    phone() {
      this.$emit("change", this.phone);
    },
    email() {
      this.$emit("change", this.email);
    },
    brand() {
      this.$emit("change", this.brand);
    },
     model() {
      this.$emit("change", this.model);
    },
    type() {
      this.$emit("change", this.type);
    },
    displacement() {
      this.$emit("change", this.displacement);
    },
    fuel() {
      this.$emit("change", this.fuel);
    },
    age() {
      this.$emit("change", this.age);
    },
    km() {
      this.$emit("change", this.km);
    },
    color() {
      this.$emit("change", this.color);
    },
    price() {
      this.$emit("change", this.price);
    },
    desc() {
      this.$emit("change", this.desc);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
    },
    async saveToPost(action) {

        const id = this.Ad._id

        let savePost = {         
          name: this.Ad.name,
          province: this.Ad.province,
          phone: this.Ad.phone,
          email: this.Ad.email,
          brand: this.Ad.brand,
          model: this.Ad.model,
          type: this.Ad.type,
          displacement: this.Ad.displacement,
          fuel: this.Ad.fuel,
          age: this.Ad.age,
          km: this.Ad.km,
          color: this.Ad.color,
          price: this.Ad.price,
          desc: this.Ad.desc,
          image: this.image,
        }

        const validatedEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
          this.Ad.email)

        if (
          this.Ad.name !== "" &&
          this.Ad.province !== "" &&
          this.Ad.phone !== "" &&
          this.Ad.email !== "" &&
          this.Ad.brand !== "" &&
          this.Ad.model !== "" &&
          this.Ad.type !== "" &&
          this.Ad.displacement !== "" &&
          this.Ad.fuel !== "" &&
          this.Ad.age !== "" &&
          this.Ad.km !== "" &&
          this.Ad.color !== "" &&
          this.Ad.price !== "" &&
          this.Ad.desc !== "" &&
          validatedEmail
        ) { 
          switch (action){
            case 'new': await this.$store.dispatch("saveToPost", { savePost }); break;
            case 'edit': await this.$store.dispatch("editPost", { id: id, savePost }); break;
            default:
          }          
        }else{
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes rellenar todos los campos y/o incluir un email válido!"});
        } 
    },
          
  }
}  
</script>

<style>
</style>
