import React, {useContext, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import {privateRoutes} from "../router";
import ErrorPage from "../../page/ErrorPage";
import { NotesContext} from "../../context";


const AppRouter = () => {
    const {notesList, setNotesList} = useContext(NotesContext)

    useEffect(() => {
        console.log(notesList)
    },[notesList])

        return(
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path='/*' element={<ErrorPage/>}/>
            </Routes>
        )
};

export default AppRouter;