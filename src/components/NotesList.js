import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({notes , handleaddnote ,handledeletenotes}) =>{
    return(
        <div className="notes-list">
           {notes.map((note) => <Note id = {note.id} text = {note.text} date = {note.date} handledeletenotes = {handledeletenotes}/>)}
           <AddNote handleaddnote = {handleaddnote}/>
        </div>
    )
}
export default NotesList