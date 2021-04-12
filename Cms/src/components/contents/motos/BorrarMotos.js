import { rutaAPI } from '../../../config/Config';
import $ from 'jquery';
import Swal from 'sweetalert2';

export default function BorrarMotos () {

	const capturarDatos = (e) => {

        e.preventDefault();  

        let data = $(e.currentTarget).attr("data").split('_,')[34];		
        
      	Swal.fire({

            title: '¿Está seguro de eliminar este registro?',  

            icon: 'warning',

            showCancelButton: true,

            confirmButtonColor: '#3085d6',

            cancelButtonColor: '#d33',

            confirmButtonText: '¡Si, eliminar registro!'

          }).then((result) => {

            if (result.value) {	

                const borrarMoto = async () =>{

                    const result = await deleteData(data);
    
                    if (result.status === 400){
    
                        Swal.fire({

                            icon:"error",

                            title: result.mensaje,

                            showConfirmButton: true,

                            confirmButtonText: "Cerrar"
                                
                        }).then(function(result){
    
                             if(result.value){
    
                                 window.location.href= "/motos";
    
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
    
                                 window.location.href= "/motos";
    
                             }
    
                        })
    
                    }
    
                }
    
                borrarMoto();
            
              }
    
        })
	}	

    $(document).on("click", ".borrarDatos", capturarDatos);	

    return "";

}


/*=============================================
PETICIÓN DELETE
=============================================*/

const deleteData = data => {

	const url = `${rutaAPI}/motos/${data}`;	
	
	const params = {

		method: "DELETE",		
		headers: {			
			'Authorization': `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
            "Content-Type": "application/json"			
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
