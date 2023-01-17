import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getNotesByKey} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import CurrentNote from '../components/CurrentNote';


interface Params {
    id: string;
}


const NotesPage = () => {

    const {currentNote, setCurrentNote} = useContext(NotesContext)
    const params = useParams<keyof Params>() as Params;


    useEffect(() => {
        getNotesByKey((Number(params.id)), setCurrentNote)
    }, [params.id])


    if (!currentNote) {
        return <div>Загрузка...</div>
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <CurrentNote title={currentNote.title} text={currentNote.text}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotesPage;