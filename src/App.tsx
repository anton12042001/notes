import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import {Col, Container, Row} from "react-bootstrap";


const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Row>
                    <Col><Header/></Col>
                </Row>
                <Row>
                    <AppRouter/>
                </Row>
            </Container>


        </BrowserRouter>
    );
};

export default App;
