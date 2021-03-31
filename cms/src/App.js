import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import './App.css';

//Componente Login
import Login from './components/login/Login';

//Componentes Estáticos
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

//Componentes Dinámicos
import Usuarios from './components/contents/usuarios/Usuarios';
import Motos from './components/contents/motos/Motos';
import Error404 from './components/contents/error404/Error404';

export default function App() {

  const auth = getAccessToken();
 

  if(!auth){

    return(

      <Login/>

    )
    
  }

  return (
    
    <div className="sidebar-mini">
      
    <div className="wrapper">

        <Header/>
        <Sidebar/>
         <BrowserRouter>
            
            <Switch>
              
              <Route exact path="/" component={Usuarios} />
              <Route exact path="/motos" component={Motos} />                        
              <Route component={Error404} />
              

            </Switch>

        </BrowserRouter>
        <Footer />

    </div> 
     
    </div>
    
  
  );
}

/*=============================================
Función para tener acceso al token
=============================================*/

const getAccessToken = ()=>{

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const id = localStorage.getItem("ID");
  const usuario = localStorage.getItem("USUARIO");

  if(!accessToken || accessToken === null ||
     !id || id === null ||
     !usuario || usuario === null
    ){      

    return false;

  }

 const metaToken = jwtDecode(accessToken); 


 if(!metaToken){

  

    return false;
 }

 if(tokenExpira(accessToken, metaToken) || metaToken._id !== id || metaToken.email !== usuario){

   return false;

 }else{

   return true;

 }

}

/*=============================================
Función para verificar fecha de expiración del token
=============================================*/

const tokenExpira = (accessToken, metaToken)=>{

const seconds = 60;

const { exp } = metaToken;

const now = (Date.now()+seconds)/1000;

return exp < now;

}