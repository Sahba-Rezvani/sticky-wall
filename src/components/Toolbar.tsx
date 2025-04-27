import { VscAdd } from "react-icons/vsc";
import { NoteT } from "../App";

type ToolbarProps={
    onAdd: ()=>void,
    notes:NoteT[]
}


export default function Toolbar({onAdd, notes}:ToolbarProps){
    return(
        <div className="header_toolbar">
            <div className="toolbar--left">
                <p>All Notes ({notes.length} Notes)</p>
            </div>
            <div className="toolbar--right">
                <button onClick={onAdd} className="add_btn">add new task  <VscAdd className="add_icon" style={{fontWeight:"bold"}} /></button>
                {/* Could be added later */}
                {/* <button>sort by</button> */}
            </div>

        
        </div>
    )
}