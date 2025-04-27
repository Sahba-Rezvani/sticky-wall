import NoteItem from "./NoteItem";
import {NoteT} from "../App"

type NoteListPropsT={
    notes:NoteT[],
    onDelete: (id:string)=>void,
    onToggle: (id:string)=>void
}

export default function NoteList({notes,onDelete,onToggle}:NoteListPropsT){
    return(
        <ul className="sticky_wall">{notes.map(note=><NoteItem note={note} onDelete={onDelete} onToggle={onToggle} key={note.id}/>)}</ul>
    )
}