import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import CreateNewNotesForm from "./createNewNotesForm";


const Header = () => {

    return (
        <div>
            <div style={{height: 55}}>
                <div>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <CreateNewNotesForm/>
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






