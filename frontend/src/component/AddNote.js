import React, { useContext, useState } from 'react'

import noteContext from '../context/note/noteContext'
// import CalendarComponent from './CalendarComponent';
function AddNote(props) {
    // const [events, setEvents] = useState([]);
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title: "", description: "", tag: "",date:"" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag,note.date);
        setNote({ date: "",title: "", description: "", tag: "" })
        props.showAlert("Added successfully", "success") 


    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
   

    return (
        <div className="container align-center-item" style={{ marginTop: "80px" }}>

            <h1>Add a Note</h1>

            <form className='my-3'>
                <div>

                    {/* <CalendarComponent events={events} setEvents={setEvents} /> */}
                </div>

                <div className="mb-3">
                    <label htmlFor="date" typeof='date' className="form-label">Date & Time</label>
                    <input type="datetime-local" className="form-control" id="date" name='date' value={note.date} onChange={onChange} required />
                </div>
         <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" placeholder='title...' className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>


                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" placeholder='description...' className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" placeholder='#tag' className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

            </form>

        </div>
    )
}

export default AddNote
