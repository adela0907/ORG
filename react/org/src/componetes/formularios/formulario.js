import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../Listaopciones"
import Boton from "../boton"

const Formulario =(props)=>{
    
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo]= useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo}= props

    const enviar =(evento)=>{
        console.log("manejar el envio", evento)
        evento.preventDefault()
        let datosEnviados={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
         registrarColaborador(datosEnviados)
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color })
    }


    return <section className="formulario">
        <form onSubmit={enviar}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                 titulo="Nombre" 
                 placeholder="Ingrese el nombre" 
                 required 
                 valor={nombre}
                 actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingrese el puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto"
                placeholder="Ingrese la foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                 titulo="Título" 
                 placeholder="Ingrese el Título" 
                 required 
                 valor={titulo}
                 actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="color"
                placeholder="Ingrese el color"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar equipo"/>
            </form>

    </section>
}

export default Formulario