import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

function SearchResults(props) {
    console.log("SearchResults " + props)
    let results = props.location.state.results


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
                        <div className="result-cell">
                            <div className="thumb-label"><p>{item.strDrink}</p></div>
                            <img src={item.strDrinkThumb} className="thumbs" alt="thumb" />
                        </div>
                        </Link>
                        
                )) } 
            </div>
        </div>
    )
}

export default SearchResults