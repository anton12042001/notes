import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getNotesByKey} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import CurrentNote from '../components/CurrentNote';
import UpdateNoteForm from "../components/UpdateNoteForm/UpdateNoteForm";


interface Params {
    id: string;
}


const NotesPage = () => {
    const [editMode,setEditMode] = useState(false)


    const {currentNote, setCurrentNote} = useContext(NotesContext)
    const params = useParams<keyof Params>() as Params;


    useEffect(() => {
        getNotesByKey((Number(params.id)), setCurrentNote)
    }, [params.id])


    if (!currentNote) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='w-100' >
            <div className=' h-100 w-100' style={{border: "1px solid black"}}>

                {editMode ? <UpdateNoteForm currentNote={currentNote} setEditMode={setEditMode} />
                    : <div onDoubleClick={() => setEditMode(true) } ><CurrentNote title={currentNote.title} text={currentNote.text}/></div> }
            </div>
        </div>
    );
};

export default NotesPage;