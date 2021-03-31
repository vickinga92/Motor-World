import React, {useState} from 'react';
import $ from 'jquery';
import { rutaAPI } from '../../../config/Config';

export default function CrearUsuarios(){


	const [usuarios, crearUsuario ] = useState({

		email: "",
		password: "", 
		profile: "admin"

	})

	/*=============================================
	OnChange
	=============================================*/

	const cambiaFormPost = e => {

		crearUsuario({

			...usuarios,
			[e.target.name] : e.target.value

		})

	}

	/*=============================================
	OnSubmit
	=============================================*/

	const submitPost = async e => {

		$('.alert').remove();

		e.preventDefault();	

		const {email, password} = usuarios;

		if(email === ""){

			$(".invalid-email").show();
			$(".invalid-email").html("Completa este campo");

			return;
		}

		const expEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

		if(!expEmail.test(email)){

			$(".invalid-email").show();
			$(".invalid-email").html("Utiliza un formato que coincida con el solicitado");

			return;
		}

		if(password === ""){

			$(".invalid-password").show();
			$(".invalid-password").html("Completa este campo");

			return;

		}

		const expPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

		if(!expPassword.test(password)){

			$(".invalid-password").show();
			$(".invalid-password").html("Utiliza un formato que coincida con el solicitado");

			return;

		}

		
		/*=============================================
		EJECTUAMOS SERVICIO POST 
		=============================================*/

		const result = await postData(usuarios);
	

		if(result.status === 400){

			$(".modal-footer").before(`<div class="alert alert-danger">${result.error}</div>`)

		}

		if(result.status === 200){

			$(".modal-footer").before(`<div class="alert alert-success">${result.mensaje}</div>`)

			$('button[type="submit"]').remove();

			setTimeout(()=>{window.location.href= "/";},3000)

		}

	}	

	/*=============================================
	Retornamos vista del componente
	=============================================*/

	return(

	<div className="modal" id="crearAdmin">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">Crear Usuario</h4>
					<button type="button" className="close" data-dismiss="modal">
						&times;
					</button>
				</div>

				  <form onChange={cambiaFormPost} onSubmit={submitPost}> 

			      <div className="modal-body">

			      	<div className="form-group">

			      		<label className="small text-secondary" htmlFor="email">*Ingrese el email del usuario</label>

			      		<div className="input-group mb-3">

			      			<div className="input-group-append input-group-text">
			      				<i className="fas fa-user"></i>
			      			</div>

			      			<input 
			      				id="email"
			      				type="email"
			      				className="form-control text-lowercase"
			      				name="email"
			      				placeholder="Correo Electrónico*"									      						      				
			      				required

			      			/>

			      			<div className="invalid-feedback invalid-email"></div>

			      		</div>	

			      	</div>

			      	<div className="form-group">

			      		<label className="small text-secondary" htmlFor="password">* Mínimo 8 caracteres, letras en mayúscula, en minúscula y números</label>

			      		<div className="input-group mb-3">

			      			<div className="input-group-append input-group-text">
			      				<i className="fas fa-key"></i>
			      			</div>

			      			<input 
			      				id="password"
			      				type="password"
			      				className="form-control"
			      				name="password"
			      				placeholder="Ingrese la contraseña*"
			      				minLength="8"
			      				pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}"
			      				required

			      			/>

			      			<div className="invalid-feedback invalid-password"></div>

			      		</div>	

			      	</div>

			      </div>


			      <div className="modal-footer d-flex justify-content-between">

				      <div><button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button></div>

				      <div><button type="submit" className="btn btn-primary">Enviar</button></div>        

			      </div>

		      </form>

			</div>
		</div>
	</div>
	)
}

/*=============================================
PETICIÓN POST usuarios
=============================================*/

const postData = data =>{

	const url = `${rutaAPI}/users`;
	
	const params = {

		method: "POST",
		body:JSON.stringify(data),
		headers: {

			"Content-Type": "application/json"
		}

	}

	return fetch(url, params).then(response=>{
		
		return response.json();

	}).then(result=>{		

		return result;

	}).catch(err=>{

		return err;

	})

}		 