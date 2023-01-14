import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../components/router";


const ErrorPage = () => {
    const navigate = useNavigate()
    const [counter,setCounter] = useState(5)

    useEffect(() => {
        if(counter > 0){
            setTimeout(() => {
                setCounter(counter -1)
            },1000)
        }
        if(counter < 1){
            navigate(RoutePath.home)
        }
    },[counter])
    return (
        <div >
            Вы перешли на не существующую страницу
            Вы будете перенаправлены на главную страницу через {counter}
        </div>
    );
};

export default ErrorPage;