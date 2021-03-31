import React, {useState} from 'react';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { rutaAPI } from '../../../config/Config';

export default function EditarBorrarUsuarios(){


	/*=============================================
	Hook para capturar datos
	=============================================*/

	const [usuarios, editarUsuarios ] = useState({

        profile:"",
		id:""

	})

	/*=============================================
	OnChange
	=============================================*/

	const cambiaFormPost = e => {

    	editarUsuarios({

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

		const { profile } = usuarios;

        console.log(profile);

        if (profile !== "admin" && profile !== "user"){

			$(".invalid-profile").show();
			$(".invalid-profile").html("Elige un perfil correcto");

			return;
		}

		
		/*=============================================
		EJECTUAMOS SERVICIO PUT 
		=============================================*/

		const result = await putData(usuarios);

		if(result.status === 400){

			$(".modal-footer").before(`<div class="alert alert-danger">${result.mensaje}</div>`)

		}

		if(result.status === 200){

			$(".modal-footer").before(`<div class="alert alert-success">${result.mensaje}</div>`)

			$('button[type="submit"]').remove();

			setTimeout(()=>{window.location.href= "/";},3000)

		}

	}	

	/*=============================================
	CAPTURAMOS DATOS PARA EDITAR
	=============================================*/

	$(document).on("click", ".editarInputs", function(e){

		e.preventDefault();

		let data = $(this).attr("data").split(',');
		
		$("#mostrarUsuario").val(data[1]);
        $("#editarProfile").val(data[2]);

		editarUsuarios({
			
			'profile' :  $("#editarProfile").val(),
			'id' :  data[0]

		})


	})

	/*=============================================
	CAPTURAMOS DATOS PARA BORRAR
	=============================================*/

	    $(document).on("click", ".borrarInput", function(e){

		e.preventDefault();

		    let data = $(this).attr("data").split(',')[0];
			
		Swal.fire({
		  title: '¿Está seguro de eliminar este registro?',		  
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: '¡Si, eliminar registro!',
          cancelButtonText: 'Cancelar'
		}).then((result) => {
		  if (result.value) {
              

			const borrarAdministrador = async () =>{

				const result = await deleteData(data);

				if (result.status === 400){

					Swal.fire({
	                    icon:"error",
	                    title: result.mensaje,
	                    showConfirmButton: true,
	                    confirmButtonText: "Cerrar"
		                    
		            }).then(function(result){

		             	if(result.value){

		             		window.location.href= "/";

		             	}

		            })

				}

				if(result.status === 200){

					Swal.fire({
	                    icon:"success",
	                    title: result.mensaje,
	                    showConfirmButton: true,
	                    confirmButtonText: "Cerrar"
		                    
		            }).then(function(result){

		             	if(result.value){

		             		window.location.href= "/";

		             	}

		            })

				}

			}

			borrarAdministrador();
	    
		  }

		})		

	})


	/*=============================================
	Retornamos vista del componente
	=============================================*/

	return(

	<div className="modal" id="editarAdmin">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">Cambia el perfil del usuario</h4>
					<button type="button" className="close" data-dismiss="modal">
						&times;
					</button>
				</div>

				   <form onChange={cambiaFormPost} onSubmit={submitPost}>  

			      <div className="modal-body">

			      	<div className="form-group">
                          

			      		<label className="small text-secondary" htmlFor="mostrarUsuario">Email del usuario</label>

			      		<div className="input-group mb-3">

			      			<div className="input-group-append input-group-text">
			      				<i className="fas fa-user"></i>
			      			</div>

			      			<input 
			      				id="mostrarUsuario"
			      				type="text"
			      				className="form-control text-lowercase"
			      				name="usuario"			      				
			      				disabled
			      			/>
			      		</div>	

			      	</div>

			      	
                      
                      <div className="form-group">

			      		<label className="small text-secondary" htmlFor="editarProfile">Elige el perfil de usuario</label>

			      		<div className="input-group mb-3">

			      			<div className="input-group-append input-group-text">
			      				<i className="fas fa-id-badge"></i>                                
			      			</div>

			      			<select
			      				id="editarProfile"			      			
			      				className="form-control"
			      				name="profile"	                                		      							      				
			      				required
                            >
                            <option value="admin">Admin</option>  
                            <option value="user">User</option>                           			      			

                            </select>

                            <div className="invalid-feedback invalid-profile"></div>

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
PETICIÓN PUT usuarios
=============================================*/

const putData = data =>{

	const url = `${rutaAPI}/users/${data.id}`;
	
	const params = {

		method: "PUT",
        body:JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`
			
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

/*=============================================
PETICIÓN DELETE usuarios
=============================================*/

const deleteData = data =>{

	const url = `${rutaAPI}/users/${data}`;
	
	const params = {

		method: "DELETE",    
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`
			
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


