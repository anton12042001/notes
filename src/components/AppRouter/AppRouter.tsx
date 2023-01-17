import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom'
import {privateRoutes} from "../router";
import ErrorPage from "../../page/ErrorPage";
import {NotesContext} from "../../context";
import AppPage from "../../page/AppPage";


const AppRouter = () => {
    const {notesList, setNotesList} = useContext(NotesContext)

    return (
        <Routes>
            <Route path='/' element={<AppPage/>}>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Route>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
};

export default AppRouter;