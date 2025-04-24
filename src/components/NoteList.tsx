import NoteItem from "./NoteItem";
import {NoteT} from "../App"

type NoteListPropsT={
    notes:NoteT[]
}

export default function NoteList({notes}:NoteListPropsT){
    return(
        <ul className="">{notes.map(note=><NoteItem note={note} key={note.id}/>)}</ul>
    )
}