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

    const {setNotesList} = useContext(NotesContext)


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
                <div className='d-flex flex-column align-items-center gap-2 p-2 '>
                    <div>
                        <input placeholder={"Введите название"} {...register("title")}
                               type="text" id="inputPassword5"
                               aria-describedby="passwordHelpBlock"
                               style={{width:250}}/>
                    </div>
                    <div>
                        <textarea placeholder={"Введите тело"} {...register("text")} id="inputPassword5"
                               aria-describedby="passwordHelpBlock" style={{width:250,resize:"none",height:150}} />
                    </div>
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