import React from 'react'

function Name (props) {
    
    return(
        <div className="flex-container">
            <label>Search by Name</label>
            <input type="text" id="name-search" onChange={ (e) => {{props.getChange(true, e.target.value)}}}></input>
        </div>
    )
}

export default Name