import React from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const AppPage = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col><Sidebar/></Col>
                    <Col><Outlet/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppPage;