<template>
<div class="container-fluid">
 <div class="row">
   <div class="col-sm-12">
    <h2 class="titleMoto">{{ title }}</h2>

   </div>
    <div class="col-sm-6">
      <img alt="" class="imageFicha" :src="image" />
    </div>
    <div class="col-sm-6 firstDesc">
      <p><b>MARCA: </b>{{ brand }}</p>
      <p><b>TIPO: </b>{{ type }}</p>
      <p><b>MODELO: </b> {{ model }}</p>
    </div>
  </div>
  <hr>
    <p><b>Descripción:</b> {{ desc }}</p>

    <h3 class="subTitleMoto">FICHA TÉCNICA</h3>
    <h4 class="tableHeader">MOTOR</h4>

    <table class="table">
      <tbody>
        <tr>
          <th scope="row">MOTOR</th>
          <td>{{ motor }}</td>
        </tr>
        <tr>
          <th scope="row">CICLO</th>
          <td>{{ cycle }}</td>
        </tr>
        <tr>
          <th scope="row">CILINDROS</th>
          <td>{{ cylinders }}</td>
        </tr>
        <tr>
          <th scope="row">VÁLVULAS X CILINDRO</th>
          <td>{{ valves }}</td>
        </tr>
        <tr>
          <th scope="row">DISTRIBUCIÓN</th>
          <td>{{ distribution }}</td>
        </tr>
        <tr>
          <th scope="row">CILINDRADA</th>
          <td>{{ displacement }} CC</td>
        </tr>
        <tr>
          <th scope="row">DIÁMETRO X CARRERA</th>
          <td>{{ diameter }}</td>
        </tr>
        <tr>
          <th scope="row">POTENCIA MÁXIMA</th>
          <td>{{ maximum_power }}</td>
        </tr>
        <tr>
          <th scope="row">PAR MOTOR</th>
          <td>{{ par }}</td>
        </tr>
        <tr>
          <th scope="row">ALIMENTACIÓN</th>
          <td>{{ feeding }}</td>
        </tr>
        <tr>
          <th scope="row">REFRIGERACIÓN</th>
          <td>{{ refrigeration }}</td>
        </tr>
        <tr>
          <th scope="row">ARRANQUE</th>
          <td>{{ start }}</td>
        </tr>
      </tbody>
    </table>

    <h4 class="tableHeader">TRANSMISIÓN</h4>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">EMBRAGUE</th>
          <td>{{ clutch }}</td>
        </tr>
        <tr>
          <th scope="row">CAMBIO</th>
          <td>{{ gearshift }}</td>
        </tr>
      </tbody>
    </table>

    <h4 class="tableHeader">DIMENSIONES</h4>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">DISTANCIA ENTRE EJES</th>
          <td>{{ distance_axis }}</td>
        </tr>
        <tr>
          <th scope="row">ALTURA DEL ASIENTO</th>
          <td>{{ seat_heigth }}</td>
        </tr>
        <tr>
          <th scope="row">CAPACIDAD DEL DEPÓSITO</th>
          <td>{{ deposit }}</td>
        </tr>
        <tr></tr>
        <tr>
          <th scope="row">PESO EN SECO</th>
          <td>{{ weight }}</td>
        </tr>
        <tr>
          <th scope="row">HOMOLOGACIÓN</th>
          <td>{{ homologation }}</td>
        </tr>
        <tr>
          <th scope="row">CHASIS</th>
          <td>{{ chasis }}</td>
        </tr>
        <tr>
          <th scope="row">SUSPENSION DELANTERA</th>
          <td>{{ front_suspension }}</td>
        </tr>
        <tr>
          <th scope="row">SUSPENSION TRASERA</th>
          <td>{{ rear_suspension }}</td>
        </tr>
        <tr>
          <th scope="row">FRENO DELANTERO</th>
          <td>{{ front_brake }}</td>
        </tr>
        <tr>
          <th scope="row">FRENO TRASERO</th>
          <td>{{ back_brake }}</td>
        </tr>
        <tr>
          <th scope="row">NEUMATICO DELANTERO</th>
          <td>{{ front_tire }}</td>
        </tr>
        <tr>
          <th scope="row">NEUMATICO TRASERO</th>
          <td>{{ rear_tire }}</td>
        </tr>
        <tr>
          <th scope="row">LLANTAS</th>
          <td>{{ tires }}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="priceBox">PRECIO: {{ price }} €</h3>
</div>

</template>

<script>
export default {
  props: [
    "image",
    "title",
    "desc",
    "brand",
    "type",
    "model",
    "price",
    "motor",
    "cycle",
    "cylinders",
    "valves",
    "distribution",
    "displacement",
    "diameter",
    "maximum_power",
    "par",
    "feeding",
    "refrigeration",
    "start",
    "clutch",
    "gearshift",
    "distance_axis",
    "seat_heigth",
    "deposit",
    "weight",
    "homologation",
    "chasis",
    "front_suspension",
    "rear_suspension",
    "front_brake",
    "back_brake",
    "front_tire",
    "rear_tire",
    "tires",
  ],
};
</script>

<style>
</style>
