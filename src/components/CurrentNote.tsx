import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



interface CurrentNote {
    title:string
    text:string
}

const CurrentNote = ({title,text}:CurrentNote) => {

    return (
        <div className="mt-5 d-flex flex-column text-wrap">
            <div className="fs-3 p-2">
                <ReactMarkdown>{title}</ReactMarkdown>
            </div>
            <div className="p-2 text-break">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
};

export default CurrentNote;