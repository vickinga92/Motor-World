import React, { useState } from 'react';
import {rutaAPI} from '../../../config/Config';
import $ from 'jquery';
import notie from 'notie';
import 'notie/dist/notie.css';

export default function CrearMotos(){

	/*=============================================
	HOOK para capturar datos
	=============================================*/

	const [moto, crearMoto] = useState({

		image:  null, title: "", model: "", id: "", desc: "", brand:"", type: "",
		price: null, motor: "", cycle: "", cylinders: "", valves: "", distribution: "", 
		displacement: null, diameter: "", maximum_power: "", par: "", feeding: "", 
		refrigeration: "", start: "", clutch: "", gearshift: "", distance_axis: "", 
		seat_heigth: "", deposit: "", weight: "", homologation: "", chasis: "", 
		front_suspension: "", rear_suspension: "", front_brake: "", back_brake: "", 
		front_tire: "", rear_tire: "" , tires: ""

	})

	/*=============================================
	OnChange
	=============================================*/

	const cambiaFormPost = e => {

		let image = $("#image").get(0).files[0];
		
		/*=============================================
	    VALIDAMOS EL FORMATO DE LA image SEA JPG O PNG
	    =============================================*/

	    if (!image){

	    	notie.alert({

	    		type: 4,
	    		text:'¡CUIDADO: Tienes que adjuntar una imagen',
	    		time: 7


	    	})

	    	$(".previsualizarImg").attr("src", "");

	    	return;
	    


	    }else if(image["type"] !== "image/jpeg" && image["type"] !== "image/png"){

	    	$("#image").val("");

	    	notie.alert({

	    		type: 3,
	    		text:'¡ERROR: La imagen debe estar en formato JPG o PNG!',
	    		time: 7


	    	})

	    	$(".previsualizarImg").attr("src", "");

	    	return;

	    }else if(image["size"] > 2000000){

	    	$("#image").val("");

	    	notie.alert({

	    		type: 3,
	    		text:'¡ERROR: La image no debe pesar más de 2MB!',
	    		time: 7


	    	})

	    	$(".previsualizarImg").attr("src", "");	

	    	return;

	    }else{

	    	let datosArchivo = new FileReader();
	    	datosArchivo.readAsDataURL(image);

	    	$(datosArchivo).on("load", function(event){

	    		let rutaArchivo = event.target.result;		
	    		
	    		$(".previsualizarImg").attr("src", rutaArchivo)

	    		crearMoto({

	    			'image': image,
	    			'title': $("#title").val(),
	    			'model': $("#model").val()

	    		})

	    	})
	    	    	
	    }

	}

	/*=============================================
	OnSubmit
	=============================================*/

	const submitPost = async e => {

		$('.alert').remove();

		e.preventDefault();	

		const {image, title, model} = moto;

		/*=============================================
		Validamos si no viene image moto
		=============================================*/

		if(image === null){

			$(".invalid-image").show();
			$(".invalid-image").html("La image no puede ir vacía");

			return;

		}

		/*=============================================
		Validamos Expresión regular
		=============================================*/

		if(title !== ""){

			const expTitle = /^([0-9a-zA-Z ]).{1,30}$/;

			if(!expTitle.test(title)){

				$(".invalid-title").show();
				$(".invalid-title").html("Utiliza un formato que coincida con el solicitado");

				return;
			
			}

		}

		/*=============================================
		Validamos Expresión regular
		=============================================*/

		if(model !== ""){

			const expModel = /^([0-9a-zA-Z ]).{1,100}$/;

			if(!expModel.test(model)){

				$(".invalid-model").show();
				$(".invalid-model").html("Utiliza un formato que coincida con el solicitado");

				return;
			
			}
		}

		/*=============================================
		EJECTUAMOS SERVICIO POST 
		=============================================*/

		const result = await postData(moto);

		if(result.status === 400){

			$(".modal-footer").before(`<div class="alert alert-danger">${result.mensaje}</div>`)
		
		}

		if(result.status === 200){

			$(".modal-footer").before(`<div class="alert alert-success mx-3">${result.mensaje}</div>`)

			$('button[type="submit"]').remove();

			setTimeout(()=>{window.location.href= "/moto";},3000)

		}
		
	}

	/*=============================================
	Limpiar Formulario
	=============================================*/

	$(document).on("click", ".limpiarFormulario", function(){

		$(".modal").find('form')[0].reset();

		$(".previsualizarImg").attr("src", "");

	})

	/*=============================================
	Retorno de la vista
	=============================================*/

	return(

		<div className="modal fade" id="crearMoto">

			<div className="modal-dialog modal-lg">

				<div className="modal-content">

					<div className="modal-header">
						<h4 className="modal-title">Crear moto</h4>
						<button type="button" className="close" data-dismiss="modal">×</button>
					</div>

					<form onChange={cambiaFormPost} onSubmit={submitPost} encType="multipart/form-data">

						<div className="modal-body px-4">

							{/*ENTRADA image*/}

							<div className="form-group">

								<label className="small text-secondary" htmlFor="image">*Peso Max. 2MB | Formato: JPG o PNG</label>

								<input 
									id="image"
									type="file" 
									className="form-control-file border" 
									name="image" 
									required
								/>

								<div className="invalid-feedback invalid-image"></div>

								<img className="previsualizarImg img-fluid"/>

							</div>

							<span className="small text-secondary"><strong>* No ingresar caracteres especiales, solo letras y números</strong></span>

							<div className="row my-2">															

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

								<div className="col-sm-3 form-group px-2">								

										<input
											id="brand"
											type="text"
											className="form-control"
											name="brand"
											placeholder="Marca*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-brand"></div>								

								</div>

								{/*ENTRADA TIPO*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="type"
											type="text"
											className="form-control"
											name="type"
											placeholder="Tipo*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-type"></div>								

								</div>

								{/*ENTRADA MODELO*/}

								<div className="col-sm-3 form-group px-2">								

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

							<div className="row my-2">	

								{/*ENTRADA MOTOR*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="motor"
											type="text"
											className="form-control"
											name="motor"
											placeholder="Tipo motor*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-motor"></div>								

								</div>

								{/*ENTRADA CICLO*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="cycle"
											type="text"
											className="form-control"
											name="cycle"
											placeholder="Ciclo*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-cycle"></div>								

								</div>														

								{/*ENTRADA CILINDRO*/}

								<div className="col-sm-3 form-group px-2 ">															

										<input
											id="cylinders"
											type="text"
											className="form-control"
											name="cylinders"
											placeholder="Cilindros*"
											pattern="([0-9a-zA-Z ]).{1,20}"

										/>

										<div className="invalid-feedback invalid-cylinders"></div>									

								</div>

								{/*ENTRADA VALVULAS*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="valves"
											type="text"
											className="form-control"
											name="valves"
											placeholder="Válvulas*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-valves"></div>								

								</div>

								
								

							</div>

							<div className="row my-2">															

								{/*ENTRADA DISTRIBUCIÓN*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="distribution"
											type="text"
											className="form-control"
											name="distribution"
											placeholder="Distribución*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-distribution"></div>								

								</div>

								{/*ENTRADA CILINDRADA*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="displacement"
											type="text"
											className="form-control"
											name="displacement"
											placeholder="Cilindrada*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-displacement"></div>								

								</div>

								{/*ENTRADA DIÁMETRO*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="diameter"
											type="text"
											className="form-control"
											name="diameter"
											placeholder="Diámetro*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-diameter"></div>								

								</div>

								{/*ENTRADA MÁXIMA POTENCIA*/}

								<div className="col-sm-3 form-group px-2">								

										<input
											id="maximum_power"
											type="text"
											className="form-control"
											name="maximum_power"
											placeholder="Máxima Potencia*"
											pattern="([0-9a-zA-Z ]).{1,20}"
										/>

										<div className="invalid-feedback invalid-maximum_power"></div>								

								</div>

							</div>


							</div>

							

							

						<div className="modal-footer d-flex justify-content-between">

							<div>
								<button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
							</div>

							<div>
								<button type="submit" className="btn btn-primary">Guardar</button>
							</div>

						</div>

					</form>

				</div>

			</div>

		</div>

	)

}

/*=============================================
PETICIÓN POST moto
=============================================*/

const postData = data =>{

	const url = `${rutaAPI}/crear-moto`;
	const token = localStorage.getItem("ACCESS_TOKEN");
	
	let formData = new FormData();

	formData.append("archivo", data.image);
	formData.append("title", data.title);
	formData.append("model", data.model);


	const params = {

		method: "POST",
		body:formData,
		headers: {

			"Authorization": token
		}
	}

	return fetch(url, params).then(response => {

		return response.json();

	}).then(result => {

		return result;	

	}).catch(err =>{

		return err.error;

	})


}