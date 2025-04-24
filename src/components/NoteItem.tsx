import {NoteT} from "../App"

type NoteItemPropsT={
    note:NoteT
}

export default function NoteItem({note}:NoteItemPropsT){
    return(
        <li className="note">
            <div className="note_header">
                <button className="note_remove">X</button>
                <button className="note_complete">uncompleted</button>
            </div>
            <p className="note_context">{note.description}</p>
            <div className="note_footer">
                <div className="note_deadline">X {note.deadline}</div>
            </div>
        </li>
    )
}