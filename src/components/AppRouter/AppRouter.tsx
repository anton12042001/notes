import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {privateRoutes} from "../router";
import ErrorPage from "../../page/ErrorPage";
import AppPage from "../../page/AppPage";


const AppRouter = () => {

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