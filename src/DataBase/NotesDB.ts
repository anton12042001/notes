

export const addStickyNote = (db:IDBDatabase, message:string ) => {  //нахождение бд и создание заметки
    let tx = db.transaction(['notes'], 'readwrite');
    let store = tx.objectStore('notes');
    let note = {text: message};
    store.add(note);
    tx.oncomplete = () => {
        alert("Заметка успешно создана")
    }
    tx.onerror = (e: Event) => {
        if(e.target instanceof IDBTransaction ){
            alert('error storing note ' + e.target.error);
        }
    }
}


export const submitNote = (messages:string) => {                      //вызов функции по создании заметки
    const dbReq = indexedDB.open("MyDB", 3);
    dbReq.onsuccess = (e: Event) => {
        if(e.target instanceof IDBOpenDBRequest ){
            let db = e.target.result;
            addStickyNote(db, messages);
        }
    }
}


export const getAndDisplayNotes = (setNotesList: React.Dispatch<React.SetStateAction<string[]>>) => {               //Получение заметок с indexedDB
    const dbReq = indexedDB.open("MyDB", 3);
    dbReq.onsuccess = (e: Event) => {
        if(e.target instanceof IDBOpenDBRequest ){
            let db = e.target.result;
            let tx = db.transaction(['notes'], 'readonly');
            let store = tx.objectStore('notes');
            let req = store.openCursor();
            let allNotes:Array<string> = [];
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
                    console.log(e)
                    alert('error in cursor request ' + e.target.error);
                }
            }
        }
    }
}
