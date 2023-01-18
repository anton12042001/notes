import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import {Col, Container, Row} from "react-bootstrap";
import {NotesContext} from "./context";
import {Note} from "./types/types";


const App = () => {

    const [notesList, setNotesList] = useState<Array<Note>>([])
    const [currentNote, setCurrentNote] = useState({title:'', text:''})
    const [searchValue,setSearchValue] = useState('')

    return (
        <BrowserRouter>
            <NotesContext.Provider value={{
                notesList,
                setNotesList,
                currentNote,
                setCurrentNote,
                searchValue,
                setSearchValue
            }}>
                <Container>
                    <Row>
                        <Col><AppRouter/></Col>
                    </Row>
                </Container>
            </NotesContext.Provider>
        </BrowserRouter>
    );
};

export default App;
