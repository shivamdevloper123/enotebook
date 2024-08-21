import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "66c2e6aae22815855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae22852855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae22858455976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae22856855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae22857855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae22859855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
  ]
    const [notes,setNotes] = useState(notesInitial)
    
       // Add a Note
       const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "61322f119553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a0664",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }
        // Delete a Note
        const deleteNote = (id)=>{
  // TODO: API Call
  console.log("Deleting the note with id"+id);
  const newNotes =notes.filter((note)=>{return note._id!== id })
  setNotes (newNotes)
        }
        // Edit a Note
        const editNote = (id, title, description, tag)=>{
  
        }
    return (
      <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState
