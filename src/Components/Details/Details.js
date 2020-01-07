import React from 'react'

import Drink from './Drink'

import '../../App.css'

function Details (props) {
    console.log(props)
    let searching = props.searching
    let output
    if (searching) {
        output = "Searching"
    } else {
        output = <Drink drink={props.drink}/>//props.drink.strDrink
    }
    return (
        <div className="flex-container">
            <h1>{output}</h1>
        </div>
    )
}

export default Details