import React from 'react'
// import { Route, Switch, Redirect} from "react-router-dom"
// import Drink from './Drink'

import '../../App.css'

function Details () {
    return (
        <div className="flex-container-column details">
            <h3>Search Results</h3>
            <p>Use search field above to search for a cocktail. If nothing is entered then clicking the button will get a random drink suggestion. The Search by Name feature will also except a single letter or a word fragment like 'tini'.
            You can also search by selecting a category above.
            If more than one drink matches your search, you'll see a list of drinks which you may browse through and select the drink you want to display. Give it a try!</p>
            <img src="/glasses3.jpg" alt="empty-glasses" className="details-pic" />
        </div>
    )
}

export default Details