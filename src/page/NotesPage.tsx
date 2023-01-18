import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getNotesByKey} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import CurrentNote from '../components/CurrentNote';
import UpdateNoteForm from "../components/UpdateNoteForm/UpdateNoteForm";
import DeletionConfirmationModal from "../components/DeletionConfirmationModal";


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
        <div className='w-100'  style={{maxWidth:1050, }} >
            <div className=' h-100 w-100 p-3' style={{minHeight:"100vh"}}>
                <div className="d-flex gap-2" >
                    {(!editMode) && <Button  variant="primary" onClick={() => setEditMode(true)}>Редактировать</Button> }
                    <DeletionConfirmationModal/>
                </div>
                {editMode ? <UpdateNoteForm currentNote={currentNote} setEditMode={setEditMode} />
                    : <div><CurrentNote title={currentNote.title} text={currentNote.text}/></div> }
            </div>
        </div>
    );
};

export default NotesPage;