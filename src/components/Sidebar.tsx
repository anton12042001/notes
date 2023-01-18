import React, {useContext, useEffect} from 'react';
import {getAndDisplayNotes} from "../dataBase/NotesDB";
import {NotesContext} from "../context";
import NoteListItem from "./NoteListItem";
import notFoundIcon from '../img/minus-circle.svg'


const Sidebar = () => {

    const {notesList, setNotesList, searchValue} = useContext(NotesContext)

    useEffect(() => {
        getAndDisplayNotes(setNotesList)
    }, [])


    const filteredNotes = notesList.filter(note => {

        return note.element.title.toLowerCase().includes(searchValue.toLowerCase())

    })


    return (
        <div className=" col-2 border-end p-2">
            {(filteredNotes.length === 0) &&
                <div>
                    <img style={{height:20, width:20}} className="w-25 h-25" src={notFoundIcon} alt="not found"/>
                    По вашему запросу ничего не найдено
                </div>
            }
            {filteredNotes.map((n, index) => <NoteListItem title={n.element.title} key={index} id={n.key}/>)}
        </div>
    );
};

export default Sidebar;