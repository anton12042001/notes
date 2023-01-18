import React from 'react';
import {useNavigate, useParams} from "react-router-dom";


interface NoteListItemProps {
    title: string
    id: number
}

interface Params {
    id: string;
}

const NoteListItem = ({title, id}: NoteListItemProps) => {
    const navigate = useNavigate()
    const params = useParams<keyof Params>() as Params;

    return (

        <div className="p-2">
            <button onClick={() => navigate(`/notes/${id}`)}
                    type="button"
                    className="btn btn-light w-60 "
                    style={{width: 125, background: Number(params.id) === id ? "#c6c7c8" : "#eaeaea"}}
            >
                {title}
            </button>
        </div>
    );
};

export default NoteListItem;