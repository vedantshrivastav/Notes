import { useState } from "react"

const AddNote = ({handleaddnote}) =>{
    const[noteText,setNoteText] = useState('')
    const characterlimit = 200;
    const handlechange = (event) =>{
        if(characterlimit - event.target.value.length>=0){
            setNoteText(event.target.value)
        }
    }
    const HandleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleaddnote(noteText)
            setNoteText('')
        }
    }
    return(
        <div className="note new">
            <textarea  cols="10" rows="8" value = {noteText} placeholder="Add Your note here" onChange={handlechange}></textarea>
            <div className="note-footer">
                <small>{characterlimit - noteText.length} Remaining</small>
                <button className="save" onClick={HandleSaveClick}> Save </button>
            </div>
        </div>
    )
}
export default AddNote