import React from 'react';
import Note from './Note';
import './styles.css';

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          description={note.description}
          important={note.important}
        />
      ))}
    </div>
  );
};

export default NoteList;

