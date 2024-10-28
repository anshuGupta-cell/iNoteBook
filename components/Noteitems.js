import React from 'react';

const Noteitems = (props) => {
  const { notes, deleteNote } = props;

  return (
    <div className='row'>
      {notes.map(note => (
<div className="card my-3 mx-3 col-md-3" key={note.title}>
  <div className="card-body ">
    <div className='d-flex align-items-center justify-content-between'>
    <h5 className="card-title ">{note.title}</h5>
    <i className="fa-regular fa-trash-can" onClick={()=>{
      deleteNote(note.id)
    }}></i>
    <i className="fa-regular fa-pen-to-square" ></i>

    </div>
    <p className="card-text">{note.description}</p>
  </div>
</div>
      ))}
    </div>
  );
}

export default Noteitems;
