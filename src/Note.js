import React from 'react';
import './styles.css';

const Note = ({ title, description, important }) => {
  const noteStyle = important ? 'note important' : 'note';

  return (
    <div className={noteStyle}>
      <h3>{title}</h3>
      <p className='descripcion'>{description}</p>
    </div>
  );
};

export default Note;