import React, {useContext, useEffect} from 'react';
import Sidebar from "../components/Sidebar";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getNotesByKey} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import CurrentNote from '../components/CurrentNote';


interface Params {
    id: string;
}




const NotesPage = () => {

//todo вынести сайд бар из всех компонентов

    const {currentNote, setCurrentNote} = useContext(NotesContext)




    const params = useParams<keyof Params>() as Params;


    useEffect(() => {
        getNotesByKey((Number(params.id) + 1 ),setCurrentNote)
    },[params.id])


    return (
        <div>
            <Container>
                <Row>
                    <Sidebar/>
                    <Col>
                        <CurrentNote title={currentNote.title} text={currentNote.text}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotesPage;