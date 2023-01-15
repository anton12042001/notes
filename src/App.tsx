import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import {Col, Container, Row} from "react-bootstrap";
import {NotesContext} from "./context";
import {Note} from "./types/types";




const App = () => {

    const [notesList,setNotesList] = useState<Array<Note>>([])


    return (
        <BrowserRouter>
            <NotesContext.Provider value={{
                notesList,
                setNotesList,
            }}>
            <Container>
                <Row>
                    <Col><Header/></Col>
                </Row>
                <Row>
                    <AppRouter/>
                </Row>
            </Container>
            </NotesContext.Provider>
        </BrowserRouter>
    );
};

export default App;
