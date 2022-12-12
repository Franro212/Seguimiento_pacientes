
import Paciente from './Paciente'

function ListadoPacientes({pacientes, setEditPaciente, eliminarPaciente }) {

  return (
    <div className='h-screen md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll overflow-x-hidden'>
    {pacientes.length !=0 ?
    (<> <h2 className='font-black text-3xl text-center'>Agenda</h2>    
            <p className='txt-xl mt-5 mb-10 text-center'> 
    Administra tus {''}

      <span className='text-indigo-600 font-bold'>
     Pacientes y citas
      </span>
    </p>
  
  {pacientes.map((paciente)=>
   <Paciente
   key={paciente.id}
   paciente={paciente}
   setEditPaciente={setEditPaciente}
   eliminarPaciente={eliminarPaciente}

   />)}

           </>)
     


     : (<h2 className='font-black text-3xl text-center'>No tienes clientes agendados</h2>)   }
   
   
    </div>
  )
}

export default ListadoPacientes