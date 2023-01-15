import React, {useEffect} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Notes from "../components/Notes/Notes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";


const HomePage = () => {


    useEffect(() => {
        const dbReq = indexedDB.open("MyDB", 3);
        dbReq.onupgradeneeded = function (e: Event) {
            if(e.target instanceof IDBOpenDBRequest){
                console.log(e)
                const db = e.target.result;
                const notes = db.createObjectStore("notes", {autoIncrement: true});
            }
            dbReq.onerror = (event: any) => {
                alert('error opening database ' + event.target.errorCode);
            }
        };
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    <Col><Sidebar/></Col>
                    <Col><Notes/></Col>
                </Row>
            </Container>

        </div>
    );
};

export default HomePage;