import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

function SearchResults(props) {
    console.log("SearchResults " + props)
    let results = props.location.state.results
    //console.log(results)
   
    // if (results.length > 10) {
    //     console.log("write long render function")
    //     results = results.slice(0,10)
    // } 

    return (
        
        <div className="flex-container-column details">
            <h3>Search Results</h3>
            
            <div className="flex-container-row search-results">
                {results.map((item, i) => (
                    <Link to={{
                        pathname: "/drink/" + item.strDrink,
                        state: {
                            drink: item
                        }
                    }} key={i} >
                        <div className="flex-container-column result-cell">
                            {item.strDrink}
                            <img src={item.strDrinkThumb} className="thumbs" alt="thumb" />
                        </div>
                        </Link>
                        
                )) } 
            </div>
        </div>
    )
}

export default SearchResults