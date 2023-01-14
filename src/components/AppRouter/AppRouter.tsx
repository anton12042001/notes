import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {privateRoutes} from "../router";
import ErrorPage from "../../page/ErrorPage";


const AppRouter = () => {

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