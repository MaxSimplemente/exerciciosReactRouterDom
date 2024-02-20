import React from 'react'
import { Outlet,Route,Routes,Link } from "react-router-dom"

 function MenuPrincipal() {
  return (
    <div>
        <h1>menuPrincipal</h1>  
        <Link to="/">Home</Link>
        <Link to="/logueo">Logueo</Link> 
        <Link to="/registro">Registro</Link>       
    </div>
  )
}

function Logueo(){
    return(
        <div>
            <h1>página de logueo</h1>
            <Link to= "/">Home</Link>
        </div>
    )
}

function Registro(){
    return(
        <div>
            <h1>página de registro</h1>
            <Link to= "/">Home</Link>
        </div>
    )
}

export default function Rutas() {
  return (
    <Routes>
        <Route path="/" element={<MenuPrincipal/>} />
        <Route path="/logueo" element={<Logueo/>} />
        <Route path="/registro" element={<Registro/>}/>
    </Routes>
  )
}
