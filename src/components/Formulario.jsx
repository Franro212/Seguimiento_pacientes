import React, { useEffect, useState } from "react";
import Error from "./Error";

function Formulario({ setPacientes, pacientes, editPaciente, setEditPaciente}) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [numero, setNumero]= useState("")
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const id = Date.now().toString(36);

  //El codigo se ejecuta cuando se presiona en editar seteamos los valores y los devolvemos al form nuevamente para editar
  useEffect(()=>{
           if (Object.keys(editPaciente).length > 0 ){
             setNumero(editPaciente.numero)
             setNombre(editPaciente.nombre)
             setEmail(editPaciente.email)
             setFecha(editPaciente.fecha)
             setSintomas(editPaciente.sintomas)
            }
  }, [editPaciente])
  


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario

    if ([nombre, fecha, ].includes("")) {
      setError("true");
      return;
    }
    setError(false);
    //Construimos un objeto para seleccionar todos los datos del formulario y setearlos en la funcion setPacientes

    const objetoPaciente = {
      nombre,
      email,
      fecha,
      sintomas,
      numero
      

    };
    if(editPaciente.id){
      //Editamos el regsitro, creamos un nuevo objeto con el mismo id y lo remplazamos para que se peude actualizar
      //El map itera sobre el state de todos los objetos que haya crea una variable temporal llamada pacienteState cuando identifica que es igual al que queremos editar retorna el objeto nuevo y lo setea el segudno returno en este caso pacienteState es para que no elimine los demas registros 
      objetoPaciente.id = editPaciente.id
      const pacienteActualizado = pacientes.map((pacienteState) => pacienteState.id === editPaciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacienteActualizado);
      setEditPaciente({});
      
    }else{
    objetoPaciente.id = id
    setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciamos los valores del form seteando las variables con un string vacio
    setNombre("");
    setEmail("");
    setFecha("");
    setSintomas("");
    setNumero("")
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Clientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Clientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5 "
      >
        {error && <Error mensaje='Nombre y fecha son requeridos'/>}
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase">
            Nombre Completo
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="nombre"
            type="text"
            placeholder="Nombre Completo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            required
          />
        </div>
      
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="numero" className="block text-gray-700 uppercase">
            Numero de Telefono
          </label>
          <input
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            id="numero"
            type="tel"
            placeholder="Numero de telefono"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase">
            Dia agendado
          </label>
          <input
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Notas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            id="sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Notas"
          />
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value = { editPaciente.id ? ('Guardar cambios') : ('Agendar cita') }
        />
      </form>
    </div>
  );
}

export default Formulario;
