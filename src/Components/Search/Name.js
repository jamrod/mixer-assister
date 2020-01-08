import React from 'react'

import '../../App.css'

function Name (props) {
    //console.log(props)
    
    return(
        <div className="flex-container-row">
            <label>Search by Name </label>
            <input type="text" id="name-search" value={props.searchField} onChange={ (e) => {{props.getChange(e.target.value)}}}></input>
        </div>
    )
}

export default Name