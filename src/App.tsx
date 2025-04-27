import "./index.css";
import Toolbar from "./components/Toolbar";
import NoteList from "./components/NoteList";
import { useState } from "react";
export type NoteT={
  description: string,
  done: boolean,
  id:string,
  date:string,
  deadline: string,
}



function App() {

const today= new Date();
const day=today.getDate().toString().padStart(2,'0');
const month=today.toLocaleString('en-US', { month: 'short' });
const year=today.getFullYear().toString().padStart(2,'0');
const submitDate= `${month} ${day}, ${year}`
console.log(submitDate);

const [description,setDescription]=useState<string>("");
const [notes, setNotes]=useState<NoteT[]>([{
  description,id:"defaultID",done: false,date:submitDate,deadline:"deadline date"
}]);

console.log(notes); //🛑 this line after clicking the [ADD NEW Note] button will log 5 arrays like this:[object,object] !!!



function handleAddNote(){
alert("Add Note")
const id=crypto.randomUUID();
const newNote:NoteT={
  description,id,done: false,date:submitDate,deadline:"deadline date"
}
setNotes(notes=>[...notes,newNote])

}

function handleDeleteNote(id:string){
  alert("Delete note")
  setNotes(notes=>notes.filter(note=>note.id!==id));
}

function handleToggleNote(id:string){
 
  setNotes(notes=>notes.map(note=>note.id===id?{...note,done: !note.done}:note))
}

  return (
    <div className="app_container">
      <h1 className="title">sticky wall</h1>
      <Toolbar onAdd={handleAddNote}/>
      <NoteList notes={notes} onDelete={handleDeleteNote} onToggle={handleToggleNote} />
    </div>
  );
}

export default App;
