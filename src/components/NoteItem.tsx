import {NoteT} from "../App"
import { MdClear } from "react-icons/md";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type NoteItemPropsT={
    note:NoteT,
    onDelete:(id:string)=>void,
    onToggle:(id:string)=>void
}

export default function NoteItem({note,onDelete,onToggle}:NoteItemPropsT){
    const [startDate, setStartDate] = useState<Date | null>(new Date());
   const day= startDate?.getDate();
   console.log(day);
   
    
    return(
        <li className="note">
            <div className="note_header">
            <MdClear className="note_remove" onClick={()=>onDelete(note.id)} /> 
            <button className="note_complete" onClick={()=>onToggle(note.id)}>{note.done?'completed':'uncompleted'}</button>
            </div>
            <div>
            <p className="note_submit">submitted: {note.date}</p>
            {/* No need to controll textarea - We have nothing to do with it's value for now */}
            <textarea maxLength={400} className="note_context" defaultValue={note.description}></textarea> 
            </div>
            
            <div className="note_footer">
                {/* <input type="date"/> */}
                {/* <div className="note_deadline">X {note.deadline}</div> */}
                <span className="deadline--label">Deadline: </span>
                <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} className="note_deadline" />
            </div>
        </li>
    )
}