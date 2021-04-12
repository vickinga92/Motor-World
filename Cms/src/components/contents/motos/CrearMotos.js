import React, { Component } from 'react';
import { rutaAPI } from '../../../config/Config';
import $ from 'jquery';
import notie from 'notie';
import uuid from 'react-uuid';
import 'notie/dist/notie.css';

import './Motos.css';

class CrearMotos extends Component {

	constructor(props) {

		super(props);	

		this.state = { 	image: [], 
						title: "", 
						model: "", 
						id: "", 
						desc: "", 
						brand: "", 
						type: "", 
						price: null, 
						motor: "", 
						cycle: "", 
						cylinders: "", 
						valves: "", 
						distribution: "",
						displacement: null, 
						diameter: "", 
						maximum_power: "", 
						par: "", 
						feeding: "",
						refrigeration: "", 
						start: "", 
						clutch: "", 
						gearshift: "", 
						distance_axis: "",
						seat_heigth: "", 
						deposit: "", 
						weight: "", 
						homologation: "", 
						chasis: "",
						front_suspension: "", 
						rear_suspension: "", 
						front_brake: "", 
						back_brake: "",
						front_tire: "", 
						rear_tire: "", 
						tires: "" 
					};

		this.image = [];

		this.idMoto = "";

		this.imageInput = React.createRef();		
		
	}

	componentDidMount() {

		$(document).on("click", ".limpiarForm", this.limpiarForm)		
		
	}
	
	limpiarForm = () => {

		$("#crearMoto").find('form')[0].reset();	

		$(`.invalid-feedback`).hide();

		this.image = [];

		this.idMoto = "";

		this.setState({image: [], id: ""});

	}

	borrarImagen = index => {

		this.image.splice (index, 1);

		this.image = this.validarImagen();

		this.setState({image: this.image});	

    }

	añadirImagen = () => {

		this.imageInput.current.click();
    
	}

	cargarImagen = () => {
		
		const imageUpload = this.imageInput.current.files;
		
		if (imageUpload){
			
			for(let i = 0; i < imageUpload.length; i++){
			 this.image.push( imageUpload[i] );
		   }
		 }  
		 
		this.image = this.validarImagen();

		this.setState({image: this.image});		
		

	}
		
	validarImagen = () => {		

		if (this.image.length < 1) {

			notie.alert({

				type: 4,
				text: 'CUIDADO: Tienes que adjuntar al menos una imagen',
				time: 3
			})
			
			$("#image").val("");

			return this.image;

		} 

		for (let i = 0; i < this.image.length; i++) {

			if ((this.image[i]["type"] !== "image/jpeg" && 
				 this.image[i]["type"] !== "image/jpg" &&
				 this.image[i]["type"] !== "image/webp" &&
				 this.image[i]["type"] !== "image/gif" &&
				 this.image[i]["type"] !== "image/png") || 
				 this.image[i]["size"] > 2000000) {			
	
				notie.alert({
	
					type: 3,
					text: 'ERROR: Algunas imágenes NO SE HAN SUBIDO.<br>Formatos permitidos: JPG/PNG/WEBP/GIF. Tamaño máximo: 2MB',
					time: 6
	
				})
				
				this.image.splice(i, 1);
				i--;

				
			} else {

				let datosImagen = new FileReader();

				datosImagen.readAsDataURL(this.image[i]);			

				$(datosImagen).on("load", function (e) {				

					const imageBase64 = e.target.result;

					$(`.previsualizarImg${i}`).attr("src", imageBase64)

				});
			}			
		}

		return this.image;		
		
	}

	actualizarCambios = () => {	
		
		if ($("#brand").val() && this.idMoto === ""){

			this.idMoto = `${$("#brand").val().split(' ')[0]}-${uuid().split('-')[0]}`

		}

		this.setState({			
			'title': $("#title").val(), 
			'model': $("#model").val(),
			'id': this.idMoto, 
			'desc': $("#desc").val(), 
			'brand': $("#brand").val(),
			'type': $("#type").val(), 
			'price': $("#price").val(), 
			'cycle': $("#cycle").val(),
			'cylinders': $("#cylinders").val(), 
			'valves':  $("#valves").val(), 
			'motor': $("#motor").val(),
			'distribution': $("#distribution").val(), 
			'displacement': Number($("#displacement").val()),
			'diameter': $("#diameter").val(), 
			'maximum_power': $("#maximum_power").val(),
			'par': $("#par").val(), 
			'feeding': $("#feeding").val(),
			'refrigeration': $("#refrigeration").val(), 
			'start': $("#start").val(), 
			'clutch': $("#clutch").val(), 
			'gearshift': $("#gearshift").val(), 
			'distance_axis': $("#distance_axis").val(), 
			'seat_heigth': $("#seat_heigth").val(),
			'deposit': $("#deposit").val(), 
			'weight': $("#weight").val(), 
			'homologation': $("#homologation").val(), 
			'chasis': $("#chasis").val(),
			'front_suspension': $("#front_suspension").val(), 
			'rear_suspension': $("#rear_suspension").val(),
			'front_brake': $("#front_brake").val(), 
			'back_brake': $("#back_brake").val(),
			'front_tire': $("#front_tire").val(), 
			'rear_tire': $("#rear_tire").val(), 
			'tires': $("#tires").val()			
		}) 	

	}
	
	enviarFormulario = async e => {		

		e.preventDefault();

		const { image, title, model, brand, type, price, displacement } = this.state;	

		let invalid = false;
			
		let images = []; image.length < 1 ? images = null : images = image;		

		const validar = { images , title, model, brand, type, displacement, price };

		const expReg = /^([0-9a-zA-Z ]).{1,20}$/;		

		for (const input in validar) {			

			if (validar[input] === "" || 
				validar[input] === null){

				invalid = true;	
				
				$(`.invalid-${input}`).show();
				$(`.invalid-${input}`).html("Este campo es obligatorio");				
			
			}else if ((!expReg.test(validar[input])) && (input !== "images")) {

				invalid = true;
						
				$(`.invalid-${input}`).show();
				$(`.invalid-${input}`).html("Utiliza un formato que coincida con el solicitado");				
			
			} else{

				$(`.invalid-${input}`).hide();
			}

		};

		if (invalid) { invalid = false; return; }			
		
		/*=============================================
		EJECTUAMOS SERVICIO POST 
		=============================================*/

		const result = await postData(this.state);

		if (result.status === 400) {

			$(".modal-footer").before(`<div class="alert alert-danger mt-3">${result.error}</div>`)

		}

		if (result.status === 200) {

			$(".modal-footer").before(`<div class="alert alert-success mt-3">${result.mensaje}</div>`)

			$('button[type="submit"]').remove();		

			setTimeout(() => { window.location.href = "/motos"; }, 3000)

		}

	}

	/*=============================================
	Retorno de la vista
	=============================================*/

	render() {

		return (

			<div className="modal fade" id="crearMoto">

				<div className="modal-dialog modal-lg">

					<div className="modal-content">

						<div className="modal-header">
							<h4 className="modal-title">Crear moto</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>

						<form onChange={this.actualizarCambios} onSubmit={this.enviarFormulario}  encType="multipart/form-data">

							<div className="modal-body px-4">

								{/*ENTRADA image*/}

								<div className="form-group">

									<label className="small text-secondary" htmlFor="image">*Peso Max. 2MB | Formato: JPG o PNG</label>

									<input
										id="image"
										name="image"	
										type="file"	
										ref= {this.imageInput}									
										multiple
										className="form-control-file border"							
										onChange = {this.cargarImagen}	
																													
									/>	

									<div className="invalid-feedback invalid-images"></div>								 

									<div className="d-flex flex-wrap justify-content-center">
										{this.state.image.map((file, index) =>											

											<div key={index} className={`row file-listing`} >
												<img alt="" className={`previsualizarImg${index} col-10 white-panel`} />
												<span className="remove-file" onClick={() => this.borrarImagen(index)}>X</span>
											</div>
										
										)}		
									</div>							                        
									
									<button type="button" className="add-file" onClick={this.añadirImagen}>Añadir Archivos</button>
									
									

								</div>

								<span className="small text-secondary"><strong>*En campos obligatorios: Máx. 20 caracteres | Mayúsculas | Minúsculas | Números </strong></span>

								<div className="row">

									{/*ENTRADA TÍTULO*/}

									<div className="col-sm-3 form-group px-2 ">

										<input
											id="title"
											type="text"
											className="form-control"
											name="title"
											placeholder="Ingrese un título*"
											pattern="([0-9a-zA-Z ]).{1,20}"														

										/>

										<div className="invalid-feedback invalid-title"></div>

									</div>

									{/*ENTRADA MARCA*/}

									<div className="col-sm-4 form-group px-2">

										<select
											name="brand"
											id="brand"
											className="form-control"
											defaultValue={'DEFAULT'}
										>
											<option value="DEFAULT" disabled hidden>
												Marca*
											</option>
											{this.props.config.marcas.map((item) => <option key={item} value={item}>{item}</option>)}
										</select>

										<div className="invalid-feedback invalid-brand"></div>

									</div>

									{/*ENTRADA TIPO*/}

									<div className="col-sm-3 form-group px-2">

										<select
											name="type"
											id="type"
											className="form-control"
											defaultValue={'DEFAULT'}
										>
											<option value="DEFAULT" disabled hidden>
												Tipo*
											</option>
											{this.props.config.tipos.map((item) => <option key={item} value={item}>{item}</option>)}
										</select>

										<div className="invalid-feedback invalid-type"></div>

									</div>

									{/*ENTRADA MODELO*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="model"
											type="text"
											className="form-control"
											name="model"
											placeholder="Modelo*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-model"></div>

									</div>

								</div>

								<div className="row">

									{/*ENTRADA ID */}

									<div className="col-sm-3 form-group px-2">

										<input
											id="id"
											type="text"
											className="form-control"
											name="id"
											placeholder="ID*"
											value={this.state.id}
											disabled
										/>

										<div className="invalid-feedback invalid-id"></div>

									</div>

									{/*ENTRADA PRECIO */}

									<div className="col-sm-2 form-group px-2">

										<input
											id="price"
											type="number"
											className="form-control"
											name="price"
											placeholder="Precio*"
											step="any"
										/>

										<div className="invalid-feedback invalid-price"></div>

									</div>

									{/*ENTRADA CILINDRADA*/}

									<div className="col-sm-3 form-group px-2">

										<select
											name="displacement"
											id="displacement"
											className="form-control"
											defaultValue={'DEFAULT'}
										>
											<option value="DEFAULT" disabled hidden>
												Cilindrada*
											</option>
											{this.props.config.cilindrada.map((item) => <option key={item} value={item}>{item}</option>)}
										</select>

										<div className="invalid-feedback invalid-displacement"></div>

									</div>

									{/*ENTRADA MOTOR*/}

									<div className="col-sm-4 form-group px-2">

										<input
											id="motor"
											type="text"
											className="form-control"
											name="motor"
											placeholder="Motor"											
											
										/>

										<div className="invalid-feedback invalid-motor"></div>

									</div>

									

								</div>

								<div className="row">

									{/*ENTRADA CILINDRO*/}

									<div className="col-sm-2 form-group px-2 ">

										<input
											id="cylinders"
											type="number"
											className="form-control"
											name="cylinders"
											placeholder="Cilindros"
											step="any"

										/>

										<div className="invalid-feedback invalid-cylinders"></div>

									</div>

									{/*ENTRADA VALVULAS*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="valves"
											type="number"
											className="form-control"
											name="valves"
											placeholder="Válvulas"
											step="any"	
										/>

										<div className="invalid-feedback invalid-valves"></div>

									</div>

									{/*ENTRADA DISTRIBUCIÓN*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="distribution"
											type="text"
											className="form-control"
											name="distribution"
											placeholder="Distribución"											
										/>

										<div className="invalid-feedback invalid-distribution"></div>

									</div>

									{/*ENTRADA CICLO*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="cycle"
											type="text"
											className="form-control"
											name="cycle"
											placeholder="Ciclo"											
										/>

										<div className="invalid-feedback invalid-cycle"></div>

									</div>									

									{/*ENTRADA DIÁMETRO*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="diameter"
											type="text"
											className="form-control"
											name="diameter"
											placeholder="Diámetro"											
										/>

										<div className="invalid-feedback invalid-diameter"></div>

									</div>

									{/*ENTRADA MÁXIMA POTENCIA*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="maximum_power"
											type="text"
											className="form-control"
											name="maximum_power"
											placeholder="Potencia"											
										/>

										<div className="invalid-feedback invalid-maximum_power"></div>

									</div>

								</div>

								<div className="row">

									{/*ENTRADA PAR*/}

									<div className="col-sm-1 form-group px-2">

										<input
											id="par"
											type="text"
											className="form-control"
											name="par"
											placeholder="Par"											
										/>

										<div className="invalid-feedback invalid-par"></div>

									</div>

									{/*ENTRADA ALIMENTACIÓN*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="feeding"
											type="text"
											className="form-control"
											name="feeding"
											placeholder="Aliment."											
										/>

										<div className="invalid-feedback invalid-feeding"></div>

									</div>

									{/*ENTRADA REFRIGERACIÓN*/}

									<div className="col-sm-2 form-group px-2 ">

										<input
											id="refrigeration"
											type="text"
											className="form-control"
											name="refrigeration"
											placeholder="Refrig."											

										/>

										<div className="invalid-feedback invalid-refrigeration"></div>

									</div>

									{/*ENTRADA EMBRAGUE*/}

									<div className="col-sm-5 form-group px-2">

										<input
											id="clutch"
											type="text"
											className="form-control"
											name="clutch"
											placeholder="Embrague"											
										/>

										<div className="invalid-feedback invalid-clutch"></div>

									</div>

									{/*ENTRADA ENCENDIDO */}

									<div className="col-sm-2 form-group px-2">

										<input
											id="start"
											type="text"
											className="form-control"
											name="start"
											placeholder="Encendido"											
										/>

										<div className="invalid-feedback invalid-start"></div>

									</div>

								</div>

								<div className="row">								

									{/*ENTRADA CAMBIOS*/}

									<div className="col-sm-4 form-group px-2">

										<input
											id="gearshift"
											type="text"
											className="form-control"
											name="gearshift"
											placeholder="Cambios"											
										/>

										<div className="invalid-feedback invalid-gearshift"></div>

									</div>

									{/*ENTRADA DISTANCIA EJES*/}

									<div className="col-sm-2 form-group px-2 ">

										<input
											id="distance_axis"
											type="text"
											className="form-control"
											name="distance_axis"
											placeholder="Dist. ejes"											

										/>

										<div className="invalid-feedback invalid-distance_axis"></div>

									</div>

									{/*ENTRADA ALTURA ASIENTO*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="seat_heigth"
											type="text"
											className="form-control"
											name="seat_heigth"
											placeholder="Alt. asiento"											
										/>

										<div className="invalid-feedback invalid-seat_heigth"></div>

									</div>

									{/*ENTRADA PESO*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="weight"
											type="text"
											className="form-control"
											name="weight"
											placeholder="Peso"											
										/>

										<div className="invalid-feedback invalid-weight"></div>

									</div>

									{/*ENTRADA HOMOLOGACION */}

									<div className="col-sm-2 form-group px-2 ">

										<input
											id="homologation"
											type="text"
											className="form-control"
											name="homologation"
											placeholder="Homolog."											

										/>

										<div className="invalid-feedback invalid-homologation"></div>

									</div>


								</div>

								<div className="row">

									{/*ENTRADA SUSPENSIÓN DELANTERA */}

									<div className="col-sm-6 form-group px-2">

										<input
											id="front_suspension"
											type="text"
											className="form-control"
											name="front_suspension"
											placeholder="Suspensión Delantera"											
										/>

										<div className="invalid-feedback invalid-front_suspension"></div>

									</div>

									{/*ENTRADA SUSPENSIÓN TRASERA*/}

									<div className="col-sm-6 form-group px-2">

										<input
											id="rear_suspension"
											type="text"
											className="form-control"
											name="rear_suspension"
											placeholder="Suspensión Trasera"											
										/>

										<div className="invalid-feedback invalid-rear_suspension"></div>

									</div>																

								</div>

								<div className="row">

									
									{/*ENTRADA FRENOS DELANTEROS */}

									<div className="col-sm-6 form-group px-2 ">

										<input
											id="front_brake"
											type="text"
											className="form-control"
											name="front_brake"
											placeholder="Frenos Delanteros"											

										/>

										<div className="invalid-feedback invalid-front_brake"></div>

									</div>

									{/*ENTRADA FRENO TRASERO*/}

									<div className="col-sm-6 form-group px-2">

										<input
											id="back_brake"
											type="text"
											className="form-control"
											name="back_brake"
											placeholder="Frenos traseros"											
										/>

										<div className="invalid-feedback invalid-back_brake"></div>

									</div>								

								</div>

								<div className="row">

									{/*ENTRADA DEPÓSITO */}

									<div className="col-sm-3 form-group px-2">

										<input
											id="deposit"
											type="text"
											className="form-control"
											name="deposit"
											placeholder="Depósito"											
										/>

										<div className="invalid-feedback invalid-deposit"></div>

									</div>
									
									{/*ENTRADA CHASIS*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="chasis"
											type="text"
											className="form-control"
											name="chasis"
											placeholder="Chasis"											
										/>

										<div className="invalid-feedback invalid-chasis"></div>

									</div>

									{/*ENTRADA NEUMÁTICOS DELANTEROS*/}

									<div className="col-sm-2 form-group px-2">

										<input
											id="front_tire"
											type="text"
											className="form-control"
											name="front_tire"
											placeholder="Neum. Del."											
										/>

										<div className="invalid-feedback invalid-front_tire"></div>

									</div>

									{/*ENTRADA NEUMÁTICOS TRASEROS */}

									<div className="col-sm-2 form-group px-2 ">

										<input
											id="rear_tire"
											type="text"
											className="form-control"
											name="rear_tire"
											placeholder="Neum. Tras."											

										/>

										<div className="invalid-feedback invalid-rear_tire"></div>

									</div>

									{/*ENTRADA LLANTAS*/}

									<div className="col-sm-3 form-group px-2">

										<input
											id="tires"
											type="text"
											className="form-control"
											name="tires"
											placeholder="Llantas"											
										/>

										<div className="invalid-feedback invalid-tires"></div>

									</div>

								</div>															

								<textarea
										id="desc"
										name="desc"										
										placeholder="Agregue la descripción (Hasta 1000 caracteres)"
										className="form-control"
										rows="3" 
										maxLength="1000"
								></textarea>



								<div className="modal-footer d-flex justify-content-between">

									<div>
										<button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
									</div>

									<div>
										<button type="submit" className="btn btn-primary">Guardar</button>
									</div>

								</div>

							</div>

						</form>

					</div>

				</div>

			</div>

		)

	}
	

}

export default CrearMotos;



/*=============================================
PETICIÓN POST
=============================================*/

const postData = data => {

	const url = `${rutaAPI}/motos`;	

	let formData = new FormData();

	for( let i = 0; i < data.image.length; i++ ){

        let file = data.image[i];

        formData.append('image[' + i + ']', file);
     }

	
	formData.append('title', data.title);
	formData.append('brand', data.brand);
	formData.append('model', data.model);	
	formData.append('type', data.type);
	formData.append('cylinders', data.cylinders);
	formData.append('id', data.id);
	formData.append('price', data.price);
	formData.append('cycle', data.cycle);	
	formData.append('motor', data.motor);	
	formData.append('displacement', data.displacement);
	formData.append('valves', data.valves);
	formData.append('distribution',data.distribution);
	formData.append('diameter', data.diameter);
	formData.append('maximum_power', data.maximum_power);
	formData.append('par', data.par);
	formData.append('homologation', data.homologation);
	formData.append('weight', data.weight);
	formData.append('deposit', data.deposit);
	formData.append('seat_heigth', data.seat_heigth);
	formData.append('distance_axis', data.distance_axis);
	formData.append('gearshift', data.gearshift);
	formData.append('clutch', data.clutch);
	formData.append('start', data.start);
	formData.append('refrigeration', data.refrigeration);
	formData.append('feeding', data.feeding);
	formData.append('chasis', data.chasis);    
	formData.append('front_suspension', data.front_suspension);  
	formData.append('rear_suspension', data.rear_suspension);  
	formData.append('front_brake', data.front_brake);  
	formData.append('back_brake', data.back_brake);  
	formData.append('front_tire', data.front_tire);  
	formData.append('rear_tire', data.rear_tire); 
	formData.append('tires', data.tires); 
	formData.append('desc', data.desc);  		

	const params = {

		method: "POST",
		body: formData,
		headers: {			
			'Authorization': `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`			
		}
	}

	return fetch(url, params).then(response => {

		return response.json();

	}).then(result => {

		return result;

	}).catch(err => {

		return err.error;

	})


}

