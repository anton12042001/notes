import {Note} from "../types/types";
import React from "react";


export const addStickyNote = (db:IDBDatabase, message:string,setNotesList:React.Dispatch<React.SetStateAction<Note[]>> ) => {
    let tx = db.transaction(['notes'], 'readwrite'); //нахождение бд и создание заметки
    let store = tx.objectStore('notes');
    let note = {text: message};
    store.add(note);
    tx.oncomplete = () => {
        getAndDisplayNotes(setNotesList)
        alert("Заметка успешно создана")
    }
    tx.onerror = (e: Event) => {
        if(e.target instanceof IDBTransaction ){
            alert('error storing note ' + e.target.error);
        }
    }
}


export const submitNote = (messages:string,setNotesList:React.Dispatch<React.SetStateAction<Note[]>>) => {
    const dbReq = indexedDB.open("MyDB", 3);             //вызов функции по создании заметки
    dbReq.onsuccess = (e: Event) => {
        if(e.target instanceof IDBOpenDBRequest ){
            let db = e.target.result;
            addStickyNote(db, messages,setNotesList);
        }
    }
}


export const getAndDisplayNotes = (setNotesList: React.Dispatch<React.SetStateAction<Note[]>>) => {
    const dbReq = indexedDB.open("MyDB", 3);
    dbReq.onsuccess = (e: Event) => {                                  //Получение заметок с indexedDB
        if(e.target instanceof IDBOpenDBRequest ){
            let db = e.target.result;
            let tx = db.transaction(['notes'], 'readonly');
            let store = tx.objectStore('notes');
            let req = store.openCursor();
            let allNotes:Array<Note> = [];
            req.onsuccess = (e:Event) => {
                if(e.target instanceof IDBRequest ){
                    let cursor = e.target.result;
                    if (cursor != null) {
                        allNotes.push(cursor.value);
                        cursor.continue();
                    } else {
                        setNotesList(allNotes);
                    }
                }
            }
            req.onerror = (e) => {
                if(e.target instanceof IDBTransaction ){
                    alert('error in cursor request ' + e.target.error);
                }
            }
        }
    }
}
