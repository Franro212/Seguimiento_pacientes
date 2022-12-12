

function Paciente({paciente, setEditPaciente, eliminarPaciente}) {
  const {nombre, numero, email, fecha, sintomas, id} = paciente

  const eliminar = ()=>{
      const respuesta = confirm("Deseas eliminar este paciente?");
      if(respuesta){
    eliminarPaciente(id)
      }
  }
  return (
    <div className="mx-5 ">
         <div className='mt-5 m-3 bg-white shadow-md px-5 py-10 rounded-xl '>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Numero de telefono: {''}
        <span className='font-normal normal-case'>{numero}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Dia agendado: {''}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Notas: {''}
        <span className='font-normal normal-case'> {sintomas} </span>
      </p>
      <div 
      className="flex justify-between mt-10">
        <button
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={()=>setEditPaciente(paciente)}>
        Editar
        </button>

        <button 
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        type="button"
        onClick={eliminar}
        >
        Eliminar
        </button>
      </div>
    </div>
    </div>
  )
}

export default Paciente