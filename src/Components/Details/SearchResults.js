import React from 'react'
import { Link } from 'react-router-dom'

function SearchResults(props) {
    console.log("SearchResults " + props)
    let results = props.location.state.results
    //console.log(results)
    //if results.length is greater than 10 render first 10 results and a next button
    //next button will render the next 10 results and a previous button and so on
    if (results.length > 10) {
        console.log("write long render function")
        results = results.slice(0,10)
    } 

    return (
        
        <div className="flex-container-row">
            <h3>Search Results</h3>
            {results.map((item, i) => (
                <Link to={{
                    pathname: "/drink/" + item.strDrink,
                    state: {
                        drink: item
                    }
                }} key={i} >{item.strDrink}</Link>
            )) } 
        </div>
    )
}

export default SearchResults