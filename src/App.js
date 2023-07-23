import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Obtener las notas almacenadas en el Local Storage al cargar el componente
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes)); // Convertir las notas almacenadas de JSON a objeto
    }
  }, []);

  useEffect(() => {
    // Guardar las notas en el Local Storage cuando se actualizan
    localStorage.setItem('notes', JSON.stringify(notes)); // Convertir las notas a JSON antes de almacenarlas
  }, [notes]);

  const addNote = (newNote) => {
    // Agregar una nueva nota al estado de notas
    setNotes([...notes, newNote]);
  };

  return (
    <div className="app">
      <h1>Tareas por hacer: </h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

// Renderizar el componente App en el elemento con el id 'root'
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
