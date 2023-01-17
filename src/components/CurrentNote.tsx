import React from 'react';


interface CurrentNote {
    title:string
    text:string
}

const CurrentNote = ({title,text}:CurrentNote) => {

    return (
        <div className="mt-5 d-flex flex-column">
            <div className="fw-bold fs-3 p-2">{title}</div>
            <div className="p-2">{text}</div>

        </div>

    );
};

export default CurrentNote;