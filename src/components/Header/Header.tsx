import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {submitNone} from "../../DataBase/NotesDB";





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
                                <button onClick={()  => submitNone(messages)} type="button" >Создать заметку</button>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div>поиск заметки</div>
            </div>
        </div>
    );
};

export default Header;






