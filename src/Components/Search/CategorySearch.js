import React from 'react'

function CategorySearch (props) {
    console.log("Category " + props.results)
    
        let results = props.results
        if (results.length > 10) {
            console.log("write long render function")
            results = results.slice(0,10)
        }
    

    return (
        <div className="flex-container-row">
            <h3>Search Results</h3>
            {results.map((item, i) => (
                <span onClick={() => props.secondSearch(item.strDrink)} key={i}></span>
            ))}
        </div>
    )
    
}

export default CategorySearch