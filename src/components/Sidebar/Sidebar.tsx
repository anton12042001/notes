import React, {useContext, useEffect} from 'react';
import {getAndDisplayNotes} from "../../dataBase/NotesDB";
import {NotesContext} from "../../context";
import NoteListItem from "../NoteListItem/NoteListItem";




const Sidebar = () => {

    const {notesList, setNotesList} = useContext(NotesContext)
    console.log(notesList)

    useEffect(() => {
        getAndDisplayNotes(setNotesList)
    }, [])

    return (
        <div className="col-3 border-end">
            {notesList.map((n,index) => <NoteListItem text={n.text} key={index}/>)}
        </div>
    );
};

export default Sidebar;