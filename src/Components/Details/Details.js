import React from 'react'
// import { Route, Switch, Redirect} from "react-router-dom"
// import Drink from './Drink'

import '../../App.css'

function Details () {
    return (
        <div className="flex-container-column details">
            <h3>Search Results</h3>
            <p>Use search field above to search for a cocktail. If nothing is entered then click the button to get a random drink suggestion.</p>
            <p id="info"></p>
        </div>
    )
}

export default Details