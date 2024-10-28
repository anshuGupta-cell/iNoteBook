import React, { useState, useEffect } from 'react';
import Noteitems from './Noteitems.js';
import NewNote from './NewNote.js';

const Home = () => {
  const initialNotes = [
    {
      id: '02',
      name: 'zero two',
      title: 'day 11',
      description: 'Something is here'
    },
    {
      id: '15',
      name: 'ichigo',
      title: 'day 2',
      description: 'Something is here'
    }
  ];

  const [notes, setNotes] = useState(initialNotes);
  
  const addNote = (note) => {
    console.log('adding a note')
   const newNote = {
      id: '420',
      name: 'ichigo',
      ...note
    }
    setNotes(prevNotes => [...prevNotes, newNote])
    console.log('added')
  }
  
  const deleteNote =(id)=>{
    console.log('delete'+id)
    const newNotes = notes.filter((note)=>{
      return note.id!==id
    })
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <NewNote addNote={addNote}/>
      <div className='row'>
        <Noteitems notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default Home;