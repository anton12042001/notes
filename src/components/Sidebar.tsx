import React, {useContext, useEffect} from 'react';
import {getAndDisplayNotes} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import NoteListItem from "./NoteListItem";


const Sidebar = () => {

    const {notesList, setNotesList} = useContext(NotesContext)


    useEffect(() => {
        getAndDisplayNotes(setNotesList)
    }, [])

    return (
        <div className="col-3 border-end p-2">
            {notesList.map((n,index) => <NoteListItem title={n.title} key={index} id={index}/>)}

        </div>
    );
};

export default Sidebar;