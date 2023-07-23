import React, { useState } from 'react';
import './styles.css';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState(''); // Estado para almacenar el valor del título
  const [description, setDescription] = useState(''); // Estado para almacenar el valor de la descripción
  const [important, setImportant] = useState(false); // Estado para almacenar el valor de la importancia
  const [errorMessage, setErrorMessage] = useState(''); // Estado para almacenar el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setErrorMessage('ERROR: ¡No puede agregar una tarea sin descripción!'); // Establecer el mensaje de error si no se ingresa una descripción
      return;
    }

    const newNote = {
      title,
      description,
      important,
    };

    addNote(newNote);

    setTitle(''); // Restablecer el valor del título
    setDescription(''); // Restablecer el valor de la descripción
    setImportant(false); // Restablecer el valor de la importancia
    setErrorMessage(''); // Restablecer el mensaje de error
  };

  return (
    <center>
      <form className="form-label" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="form-row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="Título..."
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Actualizar el valor del título en el estado
              />
              {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Mostrar el mensaje de error si existe */}
            </div>
            <div className="col" >
              <input
                className="form-control " 
                type="text"
                placeholder="Descripción..."
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Actualizar el valor de la descripción en el estado
                />
            </div>
            <div className="col-auto" >
              <label className="form-check-label">
                ¿Es esta una tarea importante? 
                
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={important}
                  onChange={(e) => setImportant(e.target.checked)} // Actualizar el valor de la importancia en el estado
                />
                <br></br>
                <p className='nota-importante'>NOTA: Las tareas importantes se marcarán en un color diferente.</p>
                
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Agregar tarea
          </button>
          <hr></hr>
        </div>
      </form>
    </center>
  );
};

export default NoteForm;

