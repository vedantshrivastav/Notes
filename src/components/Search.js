import React  from "react";
import { MdSearch } from "react-icons/md";
const Search = ({handlesearchnote}) =>{
    return(
        <div className="search">
            <MdSearch className = 'search-icons' size = '1.3rem' />
            <input onChange={(event) => handlesearchnote(event.target.value)} type="text" placeholder="Type To search" />
        </div>
    )
}
export default Search 