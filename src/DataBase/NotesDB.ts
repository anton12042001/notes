import {CurrentNote, Note} from "../types/types";
import React from "react";
import {DataProps} from "../components/createNewNotesForm";


export const addStickyNote = (db: IDBDatabase, data: DataProps, setNotesList: React.Dispatch<React.SetStateAction<Note[]>>) => {
    let tx = db.transaction(['notes'], 'readwrite'); //нахождение бд и создание заметки
    let store = tx.objectStore('notes');
    let note = {title: data.title, text: data.text};
    store.add(note);
    tx.oncomplete = () => {
        getAndDisplayNotes(setNotesList)
        alert("Заметка успешно создана")
    }
    tx.onerror = (e: Event) => {
        if (e.target instanceof IDBTransaction) {
            alert('error storing note ' + e.target.error);
        }
    }
}


export const submitNote = (data: DataProps, setNotesList: React.Dispatch<React.SetStateAction<Note[]>>) => {
    const dbReq = indexedDB.open("MyDB", 3);             //вызов функции по создании заметки
    dbReq.onsuccess = (e: Event) => {
        if (e.target instanceof IDBOpenDBRequest) {
            let db = e.target.result;
            addStickyNote(db, data, setNotesList);
        }
    }
}


export const getAndDisplayNotes = (setNotesList: React.Dispatch<React.SetStateAction<Note[]>>) => {
    const dbReq = indexedDB.open("MyDB", 3);
    dbReq.onsuccess = (e: Event) => {                                  //Получение заметок с indexedDB
        if (e.target instanceof IDBOpenDBRequest) {
            let db = e.target.result;
            let tx = db.transaction(['notes'], 'readonly');
            let store = tx.objectStore('notes');
            let req = store.openCursor();
            let allNotes: Array<Note> = [];
            req.onsuccess = (e: Event) => {
                if (e.target instanceof IDBRequest) {
                    let cursor = e.target.result;
                    if (cursor != null) {
                        const middleObject = {
                            key: cursor.key,
                            element: cursor.value
                        }
                        allNotes.push(middleObject);
                        cursor.continue();
                    } else {
                        setNotesList(allNotes);
                    }
                }
            }
            req.onerror = (e) => {
                if (e.target instanceof IDBTransaction) {
                    alert('error in cursor request ' + e.target.error);
                }
            }
        }
    }
}

export const getNotesByKey = (id: number, setCurrentNote: React.Dispatch<React.SetStateAction<CurrentNote>>) => {
    const dbReq = indexedDB.open("MyDB", 3);          //Получение заметки по ключу

    dbReq.onsuccess = (e: Event) => {
        if (e.target instanceof IDBRequest) {
            let db = e.target.result;
            let tx = db.transaction(['notes'], 'readonly');
            let store = tx.objectStore('notes');
            const response = store.get(id)
            response.onsuccess = () => {
                const data: CurrentNote = response.result;
                setCurrentNote(data)}
        }
    }
}

export const deleteNoteByKey = (id: number, setNotesList: React.Dispatch<React.SetStateAction<Note[]>>) => {
    const dbReq = indexedDB.open("MyDB", 3);       //удаление заметки
    dbReq.onsuccess = (e: Event) => {
        if (e.target instanceof IDBRequest) {
            let db = e.target.result;
            let tx = db.transaction(['notes'], 'readwrite');
            let store = tx.objectStore('notes');
            store.delete(id)
            getAndDisplayNotes(setNotesList)
        }
    }
}
