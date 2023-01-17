import React, {useContext, useState} from 'react';
import {Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import CreateNewNotesForm from "./createNewNotesForm";
import {Params, useParams} from "react-router-dom";
import {deleteNoteByKey, updateNoteByKey} from "../dataBase/NotesDB";
import {NotesContext} from "../context";


const Header = () => {
    const {currentNote, setCurrentNote,setNotesList} = useContext(NotesContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const params = useParams<keyof Params>() as Params;


    return (
        <div>
            <div style={{height: 55}}>
                <div>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Nav className="me-auto">
                                <Button variant="primary" onClick={handleShow}>
                                    Создать заметку
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Создание заметки</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><CreateNewNotesForm handleClose={handleClose}/></Modal.Body>
                                </Modal>
                                {params.id ? <Button
                                    onClick={() => deleteNoteByKey(Number(params.id),setNotesList)}
                                    variant="primary">Удалить текущую заметку</Button> : <div></div>}

                            </Nav>
                        </Container>
                        <div>поиск</div>
                    </Navbar>
                </div>

            </div>
        </div>
    );
};

export default Header;






