import {createContext} from "react"

interface Context {
    notesList:string[]
    setNotesList: React.Dispatch<React.SetStateAction<string[]>>
}



    export const NotesContext = createContext({} as Context)