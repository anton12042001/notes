import React, {createContext} from "react"
import {Note} from "../types/types";


interface Context {
    notesList: {
        text:string
    }[]

    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>
}


export const NotesContext = createContext({} as Context)