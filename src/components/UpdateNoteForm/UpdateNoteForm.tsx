import React, {Dispatch, SetStateAction, useContext} from 'react';
import {NotesContext} from "../../context";
import {FieldValue, useForm} from "react-hook-form";
import {DataProps} from "../createNewNotesForm";
import cl from './UpdateNoteForm.module.css'
import {updateNoteByKey} from "../../dataBase/NotesDB";
import {Params, useParams} from "react-router-dom";

export interface DataUpdateNoteProps {
    title: string
    text: string
}
interface UpdateNoteFormProps {
    setEditMode:Dispatch<SetStateAction<boolean>>
    currentNote:{
        title:string
        text:string
    }
}

const UpdateNoteForm = ({setEditMode,currentNote}:UpdateNoteFormProps) => {

    const params = useParams<keyof Params>() as Params
    const {setNotesList,setCurrentNote} = useContext(NotesContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    
    const onSubmit = (data: FieldValue<DataUpdateNoteProps>) => {
        updateNoteByKey(data as DataProps, Number(params.id),setCurrentNote,setNotesList)
        setEditMode(false)
        reset()
    }



    return (
        <div>
            <form onSubmit={handleSubmit(data => {onSubmit(data)})}>
                <div className="fw-bold fs-3 p-2">
                    <input  className={cl.updateNoteInputTitle}  {...register("title")}
                        defaultValue={currentNote.title}
                           type="text"/>
                </div>
                <div>
                    <input className={cl.updateNoteInputText}  {...register("text")}
                            defaultValue={currentNote.text}
                           type="text"/>
                </div>
                <button>Редактировать заметку</button>
            </form>
        </div>
    );
};

export default UpdateNoteForm;