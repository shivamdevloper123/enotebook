
import React, { useContext } from 'react'
import noteContext from '../context/note/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context

    const { note,updateNote } = props;

    return (

        <div className="col-md-4  my-3">

            <div className="card my-3 ">

                <div className="card-body" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                    <div className="d-flex align-items-center">
                        <div className="flex align-items "></div>
                        <h6 className="card-title">{note.title}</h6>  
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                        <i className="fa-regular fa-trash-can mx-2" style={{ color: "#060709" }} onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully",'success'); }}></i>
                    </div>
                    <p className="card-text">{note.description} </p>
                    {/* <div className="card-footer"> <p className="card-text">{note.date} </p></div> */}
                    <div className="card-footer text-muted" style={{  textAlign: 'center' }}>
                    <p className="mb-0">{note.date}</p>
                </div>
                </div>
            </div>

        </div>

    )
}

export default Noteitem




