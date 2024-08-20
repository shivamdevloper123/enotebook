import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "66c2e6aae2285855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae2285855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae2285855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae2285855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae2285855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
    {
      "_id": "66c2e6aae2285855976ef736",
      "user": "66c2396acf34d456f7e2ce9a",
      "title": "title update1",
      "description": "please wake me up early update",
      "tag": "update",
      "__v": 0
    },
  ]
    const [notes,setNotes] = useState(notesInitial)
    
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState
