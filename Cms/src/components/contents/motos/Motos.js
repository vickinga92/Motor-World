import React, { useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-responsive';
import {rutaAPI} from '../../../config/Config';
import CrearMotos from './CrearMotos';
import EditarMotos from './EditarMotos';
import BorrarMotos from './BorrarMotos';

export const config = React.createContext()

export default function Motos (){

	const [config, leerConf] = useState({

		tipos: [],
		marcas: [],
		cilindrada: [],

	})

	/*=============================================
	OnLoad
	=============================================*/

	const modalLoad = async () => {

		const { displacements, brands, types } = await obtenerConfiguracion();		

		leerConf({

			tipos: types,
			marcas: brands,
			cilindrada: displacements,

		})	

	}

	const dataMotos = async()=>{

	/*=============================================
	CREAMOS EL DATASET
	=============================================*/	

	const getMotos = await getData();

	const dataSet = [];		

	getMotos.forEach((motos, index)=>{

		 dataSet[index] = [(index+1),
							motos.title,
							motos.model,
							motos._id,
							[motos.title+"_",motos.model+"_",motos.id+"_",motos.desc+"_",motos.brand+"_",
							motos.type+"_",motos.price+"_",motos.cycle+"_",motos.cylinders+"_",motos.valves+"_",motos.motor+"_",
							motos.distribution+"_",motos.displacement+"_",motos.diameter+"_",motos.maximum_power+"_",
							motos.par+"_",motos.feeding+"_",motos.refrigeration+"_",motos.start+"_",motos.clutch+"_",
							motos.gearshift+"_",motos.distance_axis+"_",motos.seat_heigth+"_",motos.deposit+"_",motos.weight+"_",
							motos.homologation+"_",motos.chasis+"_",motos.front_suspension+"_",motos.rear_suspension+"_",
							motos.front_brake+"_",motos.back_brake+"_",motos.front_tire+"_",motos.rear_tire+"_",motos.tires+"_",
							motos._id+"_",motos.image]];

						

	 })	

	/*=============================================
	EJECUTAMOS DATATABLE
	=============================================*/	

	$(document).ready ( () => {

	let tablaMotos = $('.table').DataTable({

			data: dataSet,
			retrieve: true,
			"columnDefs":[{
			"searchable":true,
			"orderable":true,
			"targets":0},				
		
			],

			"order":[[0, "desc"]],

			columns: [
				
				{ title: "#" },
				{ title: "Título"},
				{ title: "Modelo"},
				{ title: "Imagen",

					render: function (data){

						return `<img src="${rutaAPI}/motos/img/0/${data}" style="width:320px">`;

					}

				 },				
				 
				{ title: "Acciones",				 	
					
					render: function(data){
					
					  return `
						
						<a href=""  class="capturarDatos" data-toggle="modal" data-target="#editarMotos" data="${data}">

							<svg style="color:black; background:orange; width:35px; line-height:35px; text-align:center; padding:8px"

							aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
							
						</a>

						<a href="" class="borrarDatos" data="${data}">
								
							<svg style="color:white; background:#dc3545; width:35px; line-height:35px; text-align:center; padding:12px"

							aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>

						</a>`

				  }
			}
			],
		});

	tablaMotos.on("order.dt search.dt", function(){

			tablaMotos.column(0, {search:"applied", order:"applied"})
			.nodes()
			.each(function(cell, i){

				cell.innerHTML = i+1

			})
		
		}).draw();

	})

}

dataMotos();	


return(

<div className="content-wrapper" style={{minHeight: "494px" }}>

		<div className="content-header">

			<div className="container-fluid">

				<div className="row mb-2">
				
					<div className="col-sm-6">

						<h1 className="m-0 text-dark">Motos</h1>

					</div>
				
				</div>

			</div>

		</div>

		<div className="content">

			<div className="container-fluid">

				<div className="row">
					
					<div className="col-lg-12">

						<div className="card card-primary card-outline">

							<div className="card-header">

								<h5 className="m-0">

									<button onClick={modalLoad} className="btn btn-primary limpiarForm" data-toggle="modal" data-target="#crearMoto">Crear nueva moto</button>
									
								</h5>

							</div>

							<div className="card-body">

								<table onClick={modalLoad} className="table table-striped dt-responsive" style={{"width":"100%"}}>								

								</table>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>
	
		<CrearMotos config={config}/>	

		<EditarMotos config={config}/>

		<BorrarMotos config={config}/>
		
		
</div>
);
}

/*=============================================
PETICIÓN GET MOTOS
=============================================*/	

const getData = ()=>{

const url = `${rutaAPI}/motos`;

const params = {

	method: "GET",
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

/*=============================================
PETICIÓN GET CONFIGURACIÓN
=============================================*/

const obtenerConfiguracion = async () => {

	const url = `${rutaAPI}/config`;
	
	const params = {

		method: "GET",
		headers: {

			"Content-Type": "application/json",
						
		}

	}

	const response = await fetch(url, params);
	const result = await response.json();
	
	
	return result[0];	

}

