import React from 'react';


interface NoteListItemProps {
    text:string
}


const NoteListItem = ({text}:NoteListItemProps) => {
    console.log(text)


    return (
        <div>
            {text}
        </div>
    );
};

export default NoteListItem;