
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componetes/header/Header';
import Formulario from './componetes/formularios/formulario';
import MiOrg from './componetes/MiOrg';
import Equipo from './componetes/equipo';
import Footer from './componetes/footer';

//el useState debe estar en un componente y se define antes del return
function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(false)
  const [colaboradores, actualizarColaboradores]=useState([{
    id: uuidv4(),
    equipo:"Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto:"Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo:"Front End",
    foto:"https://github.com/adela0907.png",
    nombre:"Adela OLivera",
    puesto:"Instructor",
    fav: false
  },
])
const [equipos, actualizarEquipos]= useState([
{
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //ternario --> condicion ? seMuestra : noSeMuestra
const cambiarMostrar=() => {
  actualizarMostrar(!mostrarFormulario)
}

//registrar colaborador

const registrarColaborador= (colaborador) => {
  console.log("nuevo colaborador",colaborador)
  //Spread operator: hace una copia del arreglo anterior
  actualizarColaboradores([...colaboradores, colaborador])
}
// Eliminar colaborador
const eliminarColaborador= (id) => {
  console.log("eliminar colaborador",id)
  const nuevosColaboradores= colaboradores.filter((colaborador)=> colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

//actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }

    return equipo
  })
  actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  function like(id) {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  }


  return (
    <div>
      <Header/>
      {/*mostrarFormulario === true ? <Formulario/>:<></> */}

      {mostrarFormulario && <Formulario
       equipos={equipos.map((equipo)=>equipo.titulo)}
       registrarColaborador={registrarColaborador}
       crearEquipo={crearEquipo}
       />}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo)=>{
          return <Equipo
           datos={equipo} 
           key={equipo.titulo}
           colaboradores={colaboradores.filter (colaborador=> colaborador.equipo === equipo.titulo)}
           eliminarColaborador={eliminarColaborador}
           actualizarColor={actualizarColor}
           like={like}
           />
        })
      }
      <Footer/>
    </div>
  );

}

export default App;
