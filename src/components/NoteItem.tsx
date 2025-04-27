import {NoteT} from "../App"
import { VscClose } from "react-icons/vsc";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion"; //Drag notes

type NoteItemPropsT={
    note:NoteT,
    onDelete:(id:string)=>void,
    onToggle:(id:string)=>void,
    onUpdate:(id:string,field: keyof NoteT, value: any)=>void,
}

export default function NoteItem({note,onDelete,onToggle,onUpdate}:NoteItemPropsT){

    function getNoteColor(note: NoteT) {
        const now = new Date();
        if(!note.deadline) return null;
        const deadlineDate = note.deadline;
        const timeDiff = deadlineDate.getTime() - now.getTime();
        const daysLeft = timeDiff / (1000 * 3600 * 24);
      
        if (note.done) {
          return '#c7c7c7'; // If completed
        } else if (daysLeft <= 3) {
          return '#ffcccb'; // If close to deadline
        } else {
          return '#fff9b0'; // Default color
        }
      }
      
    
    
    return(

            <motion.li className="note" style={{backgroundColor:getNoteColor(note)??"#fff9b0"}} drag
            whileDrag={{ scale: 1.05, rotate: 2 }}>
                <div className="note_header">
                <VscClose  className="note_remove" onClick={()=>onDelete(note.id)} /> 
                <button className="note_complete" onClick={()=>onToggle(note.id)}>{note.done?'completed':'uncompleted'}</button>
                </div>
                <div>
                <p className="note_submit">submitted: {note.date}</p>
                <textarea maxLength={400} className="note_context" value={note.description} onChange={(e) => onUpdate(note.id, "description", e.target.value)} />
                </div>
                
                <div className="note_footer">
                    {/* <input type="date"/> */}
                    {/* <div className="note_deadline">X {note.deadline}</div> */}
                    <span className="deadline--label">Deadline: </span>
                    <DatePicker selected={note.deadline} onChange={(date: Date | null) => {
            if (date) {
            onUpdate(note.id, "deadline", date);
            }
            }} className="note_deadline" />
                </div>
            </motion.li>

    )
}