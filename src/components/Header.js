import React from "react"
const Header = ({handletoggledarkmode}) =>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick = {() => handletoggledarkmode((previousdarkmode) => !previousdarkmode)}className="save">Toggle Button</button>
        </div>
    )
}
export default Header