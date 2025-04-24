import "./index.css";
import Toolbar from "./components/Toolbar";
import NoteItem from "./components/NoteItem";
import NoteList from "./components/NoteList";
import { useState } from "react";
export type NoteT={
  description: string,
  done: boolean,
  id:number,
  date:string,
  deadline: string,
}


let testArray=[{description:"This is the first note and I'm testing the functionality.",done:false,id:1,date:"12345", deadline: "02/12/2025"},{description:"This is the second note and I'm testing the functionality.",done:false,id:2,date:"12345",deadline: "09/10/2025"},{description:"This is the thirs note and I'm testing the functionality.",done:false,id:3,date:"12345",deadline: "15/05/2025"}]


function App() {
const [notes, setNotes]=useState<NoteT[]>(testArray);
console.log(notes);

  return (
    <div className="app_container">
      <h1 className="title">sticky wall</h1>
      <Toolbar/>
      <NoteList notes={testArray} />
     


      
    </div>
  );
}

export default App;
