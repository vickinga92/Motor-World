<template>
  <div class="container-fluid post">
    <div class="container">
      <div id="title-ad">
        <h1 v-if="Ad._id === ''" class="text-center">
          PUBLICA TU ANUNCIO AQUÍ GRATIS
        </h1>
        <h1 v-else class="text-center">MODIFICA TU ANUNCIO</h1>
      </div>
      <br />
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
                  <option  v-for="(item, key) in Configuration.provinces"
                          :key="key"                       
                          :value="item"
                  >
                  {{item}}</option>
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
                  <option  v-for="(item, key) in Configuration.brands"
                          :key="key"                       
                          :value="item"
                  >
                  {{item}}</option>
                 </select>
              </div>
              <div class="form-group mx-sm-3">
                <input
                  v-model="Ad.model"
                  name="model"
                  type="text"
                  id="model"
                  maxlength="24"
                  class="form-control"
                  placeholder="Modelo"
               />

               
              </div>
              <div class="form-group mx-sm-3">
                <select
                  name="tipo"
                  id="type"
                  class="form-control"
                  v-model="Ad.type"
                >
                  <option selected="selected" value="" disabled hidden>
                    Selecciona el tipo
                  </option>
                 <option  v-for="(item, key) in Configuration.types"
                          :key="key"                       
                          :value="item"
                  >
                  {{item}}</option>
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
                   <option  v-for="(item, key) in Configuration.displacements"
                          :key="key"                       
                          :value="item"
                  >
                  {{item}}</option>
                 </select>
              </div>
              <div class="form-group mx-sm-3">
                <select
                  v-model="Ad.fuel"
                  name="fuel"
                  id="Combustible"
                  class="form-control"
               >
                  <option value="" disabled hidden>
                    Selecciona el tipo de combustible
                  </option>
                   <option  v-for="(item, key) in Configuration.fuel"
                          :key="key"                       
                          :value="item"
                  >
                  {{item}}</option>
                 </select>
              </div>
              <div class="form-group mx-sm-3">
                <select
                  v-model="Ad.age"
                  name="age"
                  id="age"
                  class="form-control"
               >
                  <option selected="selected" value="" disabled hidden>
                    Selecciona el año
                  </option>  
                  <option  v-for="(item, key) in Configuration.age"
                          :key="key"                       
                          :value="item"
                  >
                  {{item}}</option>
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
                />
               
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
                />
                
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
              <h2 >Subir fotos</h2>
              <div class="container">
                <div class="text-center">                
                    <input
                      type="file"
                      ref="images"
                      multiple
                      @change="subirFotosNuevas" 
                                                                
                    />                  
                </div>
                <div class="text-center">
                  <div v-for="(file, key) in image" :key = "key">
                    <div class="row file-listing mx-auto ">                 
                      <img class="preview col-11 white-panel" v-bind:ref="`image${key}`"  />
                      <span class="remove-file " @click="borrarFoto(key)">X</span>
                    </div>                    
                  </div>
                </div>
                           
                <div class="text-center ">
                  <button class="add-file" @click="añadirFoto()">Añadir Archivos</button>
                </div>
              </div>             
            </div>     

            <button
              v-if="Ad._id === ''"
              @click.prevent="uploadPost('new')"
              type="submit"
              class="btn btn-primary btn-ad"
            >
              Publicar el anuncio
            </button>
            <button
              v-else
              @click.prevent="uploadPost('edit')"
              type="submit"
              class="btn btn-primary btn-ad"
            >
              Editar el anuncio
            </button>
          </div>
        </div>      
    </div>
  </div>
</template>

<script>


import Swal from "sweetalert2";
export default {
  name: "Post",
  data() {
    const {
      _id = "", name = "", province = "", phone = "", email = "", brand = "", 
      model = "", type = "", displacement = "", fuel = "", age = "", km = "", 
      color = "", price = "", desc = "", image = [] } = this.$store.state.OnePost;  

    return {     
      image: [],  
      Ad: {
        _id, name, province, phone, email, brand,
        model, type, displacement, fuel, age, km,
        color, price, desc, image
      },
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
    model(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
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
  async mounted(){  
    
    this.leerFotos();    

    await this.$store.dispatch("getConfiguration");

  },
  computed:{

    Configuration() {
      return this.$store.state.Configuration;
    }

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
    subirFotosNuevas(){      
         
      let uploadedFiles = this.$refs.images.files;

      if (uploadedFiles){
         for(let i = 0; i < uploadedFiles.length; i++){
          this.image.push( uploadedFiles[i] );
        }
      }  
      this.pintarFotos();
      
    },
    borrarFoto( key ){
        this.image.splice( key, 1 );       
    },
    añadirFoto(){
        this.$refs.images.click();
     },
    async leerFotos () {

      for (let i = 0; i < this.Ad.image.length; i++){    

        const blob = await fetch(`http://localhost:8083/post/img/${i}/${this.Ad._id}`)
                    .then(r => r.blob())
        const file = new File([blob], this.Ad.image[i], { type: "image/*" });
        this.image.push( file );         
       
      };

      this.pintarFotos();
    },
    pintarFotos (){

      for (let i = 0 ; i < this.image.length; i++){
        
        let reader = new FileReader(); 
        reader.addEventListener('load', function(){
          this.$refs[`image${i}`][0].src = reader.result;             
          
        }.bind(this), false);  
        
        reader.readAsDataURL(this.image[i]);
      }


    },    
  
    async uploadPost(action) {

      const id = this.Ad._id;

      let formData = new FormData();
      
      for( let i = 0; i < this.image.length; i++ ){
        let file = this.image[i];
        formData.append('image[' + i + ']', file);
      }

      formData.append('name', this.Ad.name);
      formData.append('province', this.Ad.province);
      formData.append('phone', this.Ad.phone);
      formData.append('email', this.Ad.email);
      formData.append('brand', this.Ad.brand);
      formData.append('model', this.Ad.model);
      formData.append('type', this.Ad.type);
      formData.append('displacement', this.Ad.displacement);
      formData.append('fuel', this.Ad.fuel);
      formData.append('age', this.Ad.age);
      formData.append('km', this.Ad.km);
      formData.append('color',  this.Ad.color);
      formData.append('price', this.Ad.price);
      formData.append('desc', this.Ad.desc);    

      const validatedEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        this.Ad.email
      );

      if (
        // this.Ad.name !== "" && this.Ad.province !== "" && this.Ad.phone !== "" &&
        // this.Ad.email !== "" && this.Ad.brand !== "" && this.Ad.model !== "" &&
        // this.Ad.type !== "" && this.Ad.displacement !== "" && this.Ad.fuel !== "" &&
        // this.Ad.age !== "" && this.Ad.km !== "" && this.Ad.color !== "" && this.Ad.price !== "" &&
        // this.Ad.desc !== "" &&
         validatedEmail
      ) {
        switch (action) {
          case "new":
            await this.$store.dispatch("savePost", { formData });
            break;
          case "edit":
            await this.$store.dispatch("editPost", { id, formData });
            break;
          default:
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes rellenar todos los campos y/o incluir un email válido!",
        });
      }
    },
  },
};
</script>

<style>
input[type="file"] {
  display: none;
}
.file-listing {
  max-width: 500px;
}
.remove-file {
  position:relative;
  background: white;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.3); 
  border-radius: 500px;
  cursor: pointer;
  height:30px;
  width:30px;
  right:15px;
  top:-10px; 
  padding: 3px 0px; 

}
.white-panel {	 
	background: white;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
	padding: 10px;
  border-radius: 20px;
  margin-bottom:20px;
}
.add-file {	 
	background: white;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
	padding: 5px 15px;
  border-radius:10px;
  margin-bottom:10px;
  border: 0;
}
</style>

                          
