import React, { useContext } from 'react';
import noteContext from '../context/note/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
function Notes() {
    const context = useContext(noteContext);
    const {notes} = context;

    return (
        <>
        <AddNote/>
        <div className="container">
            <div className="row" >
            <h2>Your Notes</h2>
              {notes.map((note) => {
             return <Noteitem key={note._id} note={note} />
                   
                })}
           
            </div>
        </div>
        </>
    );
}

export default Notes;
