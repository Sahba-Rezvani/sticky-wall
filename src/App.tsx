import "./index.css";
import Toolbar from "./components/Toolbar";
import NoteList from "./components/NoteList";
import { useState } from "react";

export type NoteT={
  description: string,
  done: boolean,
  id:string,
  date:string,
  deadline: Date|null,
}

function App() {

const today= new Date();
const day=today.getDate().toString().padStart(2,'0');
const month=today.toLocaleString('en-US', { month: 'short' });
const year=today.getFullYear().toString().padStart(2,'0');
const submitDate= `${month} ${day}, ${year}`
const defaultDeadline= new Date(today.getTime()+7*24*60*60*1000)



const [notes, setNotes]=useState<NoteT[]>([{
  description:"",id:"defaultID",done: false,date:submitDate,deadline:defaultDeadline
}]);




function handleAddNote(){
const id=crypto.randomUUID();
const newNote:NoteT={
  description:"",id,done: false,date:submitDate,deadline:defaultDeadline
}
setNotes(notes=>[...notes,newNote])

}

function handleDeleteNote(id:string){
  setNotes(notes=>notes.filter(note=>note.id!==id));
}

function handleUpdateNote(id:string,field: keyof NoteT, value: any ){
  setNotes(notes=>notes.map(note=>note.id===id?{...note,[field]: value }:note))
  
}

function handleToggleNote(id:string){
 
  setNotes(notes=>notes.map(note=>note.id===id?{...note,done: !note.done}:note))
}


  return (
    <div className="app_container">
      <h1 className="title">my sticky wall</h1>
      <Toolbar onAdd={handleAddNote} notes={notes}/>
      <NoteList notes={notes} onDelete={handleDeleteNote} onToggle={handleToggleNote} onUpdate={handleUpdateNote} />
    </div>
  );
}

export default App;
