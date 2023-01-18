import React, {useContext, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {deleteNoteByKey} from "../dataBase/NotesDB";
import {Params, useParams} from "react-router-dom";
import {NotesContext} from "../context";

const DeletionConfirmationModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const params = useParams<keyof Params>() as Params;
    const {setCurrentNote, setNotesList} = useContext(NotesContext)


    const deleteNote = () => {
        deleteNoteByKey(Number(params.id), setNotesList, setCurrentNote)
        handleClose()
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Удалить текущую заметку
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Подтверждение удаления</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы действительно хотите удалить текущую заметку?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Не удалять
                    </Button>
                    <Button variant="primary" onClick={deleteNote}>
                        Удалить заметку
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DeletionConfirmationModal;