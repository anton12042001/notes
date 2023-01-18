import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {openDB} from "../dataBase/NotesDB";

const AppPage = () => {

    const [loading,setloading] = useState(true)



    useEffect(() => {
        openDB()
        setloading(false)
    }, [])

    return (
        <div>
            <Header/>
            <div className="d-flex w-100">
                {(!loading) && <Sidebar/>}
                <Outlet/>
            </div>
        </div>
    );
};

export default AppPage;