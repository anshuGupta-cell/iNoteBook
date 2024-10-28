import React, { useState } from 'react';

const NewNote = (props) => {
  const { addNote } = props;
  
  const [note, setNote] = useState({ title: '', description: '' });

  const handleClick = (e) => {
    e.preventDefault(); 
    if (note.title && note.description) { 
      addNote(note);
      setNote({ title: '', description: '' }); 
    }
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input 
          type="text" 
          className="form-control" 
          id='title' 
          name='title' 
          value={note.title} 
          onChange={onChange} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Your Note</label>
        <input 
          type="text" 
          className="form-control" 
          id='description' 
          name='description' 
          value={note.description} 
          onChange={onChange} 

        />
      </div>
    
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Save</button>
    </form>
  );
}

export default NewNote;
