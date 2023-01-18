import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import CreateNewNotesForm from "./createNewNotesForm";
import {useNavigate} from "react-router-dom";
import {NotesContext} from "../context";


const Header = () => {
    const {currentNote, setSearchValue} = useContext(NotesContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentNote) {
            navigate('/home')
        }

    }, [currentNote])


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
                                    <Modal.Body>
                                        <CreateNewNotesForm handleClose={handleClose}/>
                                    </Modal.Body>
                                </Modal>
                            </Nav>
                        </Container>
                        <div>
                            <Form className="d-flex">
                                <Form.Control
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    type="search"
                                    placeholder="Поиск заметки"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </div>
                    </Navbar>
                </div>

            </div>
        </div>
    );
};

export default Header;






