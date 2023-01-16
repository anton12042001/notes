import React, {useContext} from 'react';
import {FieldValue, useForm} from "react-hook-form";
import {submitNote} from "../dataBase/NotesDB";
import {NotesContext} from "../context";


export interface DataProps {
    title: string
    text: string
}


const CreateNewNotesForm = () => {

    const {notesList, setNotesList} = useContext(NotesContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data: FieldValue<DataProps>) => {
        submitNote(data as DataProps,setNotesList)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(data => {
                onSubmit(data)
            })}>
                <div>
                    <input placeholder={"Введите название"} {...register("title")}
                           type="text" id="inputPassword5"
                           aria-describedby="passwordHelpBlock"/>
                </div>
                <div>
                    <input placeholder={"Введите тело"} {...register("text")}
                           type="text" id="inputPassword5"
                           aria-describedby="passwordHelpBlock"/>
                </div>
                <button>Создать заметку</button>
            </form>
        </div>
    );
};

export default CreateNewNotesForm;