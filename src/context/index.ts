import React, {createContext} from "react"
import {CurrentNote, Note} from "../types/types";


interface Context {
    notesList: {
        key: number
        element: {
            title: string
            text: string
        }
    }[]
    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>

    currentNote: {
        title: string
        text: string
    }
    setCurrentNote: React.Dispatch<React.SetStateAction<CurrentNote>>
}


export const NotesContext = createContext({} as Context)

