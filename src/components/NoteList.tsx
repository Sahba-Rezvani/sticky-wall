import NoteItem from "./NoteItem";
import {NoteT} from "../App"

type NoteListPropsT={
    notes:NoteT[],
    onDelete: (id:string)=>void,
    onToggle: (id:string)=>void
    onUpdate:(id:string,field: keyof NoteT, value: any)=>void,
}

export default function NoteList({notes,onDelete,onToggle,onUpdate}:NoteListPropsT){
    return(
        <ul className="sticky_wall">{notes.map(note=><NoteItem note={note} onDelete={onDelete} onToggle={onToggle} onUpdate={onUpdate}  key={note.id} />)}</ul>
    )
}