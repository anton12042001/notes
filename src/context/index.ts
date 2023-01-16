import React, {createContext} from "react"
import {Note} from "../types/types";


interface Context {
    notesList: {
        title:string
        text:string
    }[]
    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>

    currentNote:{
        title:string
        text:string
    }
    setCurrentNote: React.Dispatch<React.SetStateAction<Note>>
}



export const NotesContext = createContext({} as Context)

