import React from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
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