import React, {useContext} from 'react';
import {FieldValue, useForm} from "react-hook-form";
import {submitNote} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import {Button, Modal} from "react-bootstrap";


export interface DataProps {
    title: string
    text: string
}


const CreateNewNotesForm = ({handleClose}:any) => {

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

                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button type={"submit"} variant="primary" onClick={handleClose}>
                        Сохранить
                    </Button>
                </Modal.Footer>

            </form>
        </div>
    );
};

export default CreateNewNotesForm;