import React from 'react'

function Details (props) {
    let searching = props.searching
    return (
        <div className="flex-container">
            {searching ? <h1>Searching</h1> : <h1>Drink</h1>}
        </div>
    )
}

export default Details