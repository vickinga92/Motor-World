import React from 'react';
import Logo from './logoMoto.jpg';

export default function Sidebar (){

	const usuario = localStorage.getItem("USUARIO");


	return (

		<aside className="main-sidebar sidebar-dark-primary elevation-4">

			<a href="#/" className="brand-link">

				<img 
					alt="AdminLTE Logo"
					className="brand-image elevation-3"
					style={{ opacity: 0.8 }}
					src={Logo}
			
				/>

				<span className="brand-text font-weight-light">Manager</span>

			</a>

			<div className="sidebar">

				<div className="user-panel mt-3 pb-3 mb-3 d-flex">				

					<div className="info">
						<a href="#/" className="d-block">
							{usuario}
						</a>
					</div>	

				</div>

				<nav className="mt-2">

					<ul
						className="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false"
					>

						<li className="nav-item">
				            <a href="/" className="nav-link">
				              <i className="nav-icon fas fa-user-lock"></i>
				              <p>
				                Administradores
				              </p>
				            </a>
			          	</li>

		          		<li className="nav-item">
				            <a href="/motos" className="nav-link">
				              <i className="nav-icon fas fa-motorcycle"></i>							  
				              <p>
				                Gestor Motos
				              </p>
				            </a>
			          	</li>

			          	{/* <li className="nav-item">
				            <a href="/post" className="nav-link">			          
				              <i className="nav-icon fas fa-images"></i>
				              <p>
				                Gestor Posts
				              </p>
				            </a>
			          	</li> */}

			          	{/* <li className="nav-item">
				            <a href="/articulos" className="nav-link">			           
				              <i className="nav-icon far fa-file"></i>
				              <p>
				                Gestor Artículos
				              </p>
				            </a>
			          	</li> */}

			          	{/* <li className="nav-item">
				            <a href="#/" className="nav-link">
				              <i className="nav-icon fas fa-users"></i>
				              <p>
				                Otro gestor
				              </p>
				            </a>
			          	</li> */}

					</ul>

				</nav>

			</div>

		</aside>





		);


}
