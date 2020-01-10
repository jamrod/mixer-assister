import React from 'react'

import '../../App.css'

function Category (props) {


    const categories = ["Select Category", "Ordinary Drink", "Cocktail", "Milk / Float / Shake", "Other/Unknown", "Cocoa", "Shot", "Coffee / Tea", "Homemade Liqueur", "Punch / Party Drink", "Beer", "Soft Drink / Soda"]

    return(
        <select value={props.option} onChange={ (e) => {props.getCategory(e.target.value)}} id="category-select">

            {categories.map((item, i) => (
                <option value={item} key={i}>{item}</option>
            ))}
            
        </select>
    )
}

export default Category