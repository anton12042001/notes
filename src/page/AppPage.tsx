import React from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const AppPage = () => {
    return (
        <div>
            <Header/>
            <div className="d-flex w-100">
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default AppPage;