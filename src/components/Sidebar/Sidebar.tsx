import React, {useContext} from 'react';
import {getAndDisplayNotes} from "../../dataBase/NotesDB";
import {NotesContext} from "../../context";

const Sidebar = () => {
    const {setNotesList} = useContext(NotesContext)
    console.log(setNotesList)
    return (
        <div className="col-3 border-end">
            <button onClick={() => getAndDisplayNotes(setNotesList)}>Запросить данные</button>
        </div>
    );
};

export default Sidebar;