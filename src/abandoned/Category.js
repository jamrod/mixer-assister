import React from 'react'

import '../../App.css'

function Category (props) {
    //console.log(props)
    //TODO declare array of categories
    const categories = ["Select Category", "Ordinary Drink", "Cocktail", "Milk / Float / Shake", "Other/Unknown", "Cocoa", "Shot", "Coffee / Tea", "Homemade Liqueur", "Punch / Party Drink", "Beer", "Soft Drink / Soda"]

    return(
        <select value={props.option} onChange={ (e) => {{props.getChange(false, e.target.value)}}}>
            {/* TODO map over category array to create options */}
            {categories.map((item, i) => (
                <option value={item} key={i}>{item}</option>
            ))}
            {/* <option value="Select Category">Select Category</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option> */}
        </select>
    )
}

export default Category