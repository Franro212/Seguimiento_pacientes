import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  // iniciamos el useState de pacientes  para obtener nuevamente el objeto guardado en el storage 
  //   el doble operador ?? significa que si del lado de la izquiereda es null o undefined, devuelve el valor de la derecha de la contrario devuelve el valor de la izquierda
  const[pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes'))?? []);
  const [editPaciente, setEditPaciente] = useState({});

  
 

  useEffect(()=>{
    //tomtampos el objeto que  haya en pacientes y lo convertimos a un string plano de esta manera localstorage puede guardar esos datos y luego finalizamos en efect con la variante paciente para que se actualice la cantidad de veces que haya.
  localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesEliminados = pacientes.filter(paciente => paciente.id !== id)
   setPacientes(pacientesEliminados)
  }
  
  return (
    <div className="container mx-auto mt-20">
    <Header></Header>
    
    <div className="mt-12 md:flex">
    <Formulario
     setPacientes={setPacientes}
      pacientes={pacientes}
      editPaciente={editPaciente}
      setEditPaciente={setEditPaciente}
     />
    <ListadoPacientes
      pacientes={pacientes}
      setEditPaciente={setEditPaciente}
      eliminarPaciente={eliminarPaciente}
    />

    </div>
     
    </div>
  )
}

export default App
