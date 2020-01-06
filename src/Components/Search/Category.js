import React from 'react'

function Category (props) {
    //console.log(props)
    //TODO declare array of categories
    return(
        <select value={props.option} onChange={ (e) => {{props.getChange(false, e.target.value)}}}>
            {/* TODO map over category array to create options */}
            <option value="Select Category">Select Category</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
        </select>
    )
}

export default Category