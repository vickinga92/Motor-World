<template>

      <div class="article col-sm-4">
        <img alt="" :src="image" />
        <h3>{{title}}</h3>
        <p> <b>Descripción:</b> {{ desc }}</p>
        <p>MARCA: {{ brand }}</p>
        <p>TIPO: {{type}}</p>
        <p>MODELO: {{model}}</p>

        <h3 class="priceBox">{{ price }} €</h3>

        <table class="table">

  <tbody>
     <thead>
    <tr>
      <th scope="col">MOTOR</th>
    </tr>
  </thead>
    <tr>
      <th scope="row">MOTOR</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">CICLO</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">CILINDROS</th>
      <td>Larry</td>
    </tr>
   <tr>
      <th scope="row">VÁLVULAS X CILINDRO</th>
      <td>Larry</td>
    </tr>
     <tr>
      <th scope="row">CILINDRADA</th>
      <td>Larry</td>
    </tr> <tr>
      <th scope="row">ALIMENTACIÓN</th>
      <td>Larry</td>
    </tr> <tr>
      <th scope="row">REFRIGERACIÓN</th>
      <td>Larry</td>
    </tr>
     <tr>
      <th scope="row">ARRANQUE</th>
      <td>Larry</td>
    </tr>

  </tbody>
</table>

      </div>

</template>

<script>
export default {
  props: ["image", "title", "desc", "brand", "type", "model",  "price"],
};
</script>

<style>
</style>
