

export const addStickyNote = (db:IDBDatabase, message:string ) => {  //нахождение бд и создание заметки
    let tx = db.transaction(['notes'], 'readwrite');
    console.log(tx)
    let store = tx.objectStore('notes');
    let note = {text: message, timestamp: Date.now()};
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


export const submitNone = (messages:string) => {
    const dbReq = indexedDB.open("MyDB", 3); //вызов функции по создании заметки
    dbReq.onsuccess = (e: Event) => {
        if(e.target instanceof IDBOpenDBRequest ){
            let db = e.target.result;
            addStickyNote(db, messages);
        }
    }
}
