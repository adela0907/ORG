import { useState } from "react"
import "./MiOrg.css"
const MiOrg=(props)=>{
    //Estado- Hooks
    //useState()
    //const [var,funcionActualizar]= useStste(valorInicial)

   // const manejarClick=()=>{
     //   console.log("mostrar/ocultar elemento")
     // const [mostrar,actualizarMostrar]= useState(true)
      // actualizarMostrar(!mostrar)
      //  }
      
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add-01.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg    