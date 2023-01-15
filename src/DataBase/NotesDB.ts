

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
        console.log(e)
        if(e.target instanceof IDBOpenDBRequest ){
            let db = e.target.result;
            addStickyNote(db, messages);
        }
    }
}





