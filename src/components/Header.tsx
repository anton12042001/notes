import React, {useState} from 'react';
import {Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import CreateNewNotesForm from "./createNewNotesForm";
import {Params, useLocation, useParams} from "react-router-dom";


const Header = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const params = useParams<keyof Params>() as Params;
    console.log(params)




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
                                {/*{params.id ? <Button variant="primary">Удалить заметку заметку</Button> : <div></div> }*/}
                                <Button variant="primary">Удалить заметку заметку</Button>



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






