import React from 'react'

function TwoLevelSearch (props) {
    console.log(props)
    const results = props.results
    if (results.length > 10) {
        console.log("write long render function")
        results = results.slice(0,10)
    }

    function onClick(str) {
        //console.log(e)
        props.nameSearch(str)
    }

    return (
        <div className="flex-container-row">
            <h3>Search Results</h3>
            {results.map((item, i) => (
                <span onClick={onClick(item.strDrink)} key={i}></span>
            ))}
        </div>
    )
    
}

export default TwoLevelSearch