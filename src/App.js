import { useEffect, useState } from "react";
import {nanoid} from "nanoid" 
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () =>{
  const [notes,setnotes] = useState([{
    id : nanoid(),
    text : "This is my first note!",
    date : "09/07/2023"
  },
  {
    id : nanoid(),
    text : "This is my second note!",
    date : "09/07/2023"
  },
  {
    id : nanoid(),
    text : "This is my third note!",
    date : "09/07/2023"
  }])
  

  const [searchtext,setsearchtext] = useState('');

  const [darkmode,setdarkmode] = useState(false);
  
  const addNote = (text) =>{
     const date = new Date();
     const newNote = {
        id : nanoid(),
        text : text,
        date : date.toLocaleDateString()
     }
     const Newnotes = [...notes,newNote];
     setnotes(Newnotes)
  }

  const deleteNote = (id) =>{
     const newNotes =  notes.filter((note) => note.id!==id)
     setnotes(newNotes)
  }
    return(
       <div className={`${darkmode && 'dark-mode'}`}>
         <div className="container">
        <Header handletoggledarkmode = {setdarkmode}/>
        <Search handlesearchnote = {setsearchtext}/>
        <NotesList notes = {notes.filter((note) => note.text.toLowerCase().includes(searchtext))} 
        handleaddnote = {addNote} 
        handledeletenotes = {deleteNote}/>
      </div>
       </div>
    )
};
export default App