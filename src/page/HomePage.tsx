import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";


const HomePage = () => {


    useEffect(() => {
        const dbReq = indexedDB.open("MyDB", 3);
        dbReq.onupgradeneeded = function (e: Event) {
            if(e.target instanceof IDBOpenDBRequest){
                const db = e.target.result;
                const notes = db.createObjectStore("notes", {autoIncrement: true});
            }
            dbReq.onerror = (e: Event) => {
                if(e.target instanceof IDBTransaction ){
                    alert('error opening database ' + e.target.error);
                }
            }
        };
    }, [])




    return (
        <div>
            <Container>
                <Row>
                    <Sidebar/>                                        //todo вынести сайд бар из всех компонентов
                    <Col>Выберите какую-нибудь заметку из сайдбара слева!</Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;