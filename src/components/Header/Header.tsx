import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {submitNote} from "../../dataBase/NotesDB";





const Header = () => {

    const [messages, setMessages] = useState("")
    const [editMove, setEditMove] = useState(false)



    return (
        <div>
            <div style={{height: 55}}>
                <div>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <input type="text" id="inputPassword5"
                                       aria-describedby="passwordHelpBlock"
                                       onChange={(e) => setMessages(e.target.value)}/>
                                <button onClick={()  => submitNote(messages)} type="button" >Создать заметку</button>
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






