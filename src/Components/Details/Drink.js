import React from 'react'

import '../../App.css'

function Drink (props) {
    // console.log("Drink " + props)
    const drink = props.location.state.drink
    let drinkArray = Object.keys(drink)
    let ingredientArr = []
    let measureArr = []
    let ingredientsArr = []
    
    for (let i=0; i<drinkArray.length; i++) {
        const key = drinkArray[i]
        const value = drink[key]
        if (value === null){
            //do nothing
        } else {
            if (key.includes("strIngredient")) {
                ingredientArr.push(value)
            }
            if (key.includes("strMeasure")) {
                measureArr.push(value)
            }
        }
    }
    
    for (let i=0; i<ingredientArr.length; i++) {
        const item = `${measureArr[i]} ${ingredientArr[i]}`
        ingredientsArr.push(item)
    }

    return (
        <div className="drink details">
            <div className="flex-container-column drink-description">
            <h3>{drink.strDrink}</h3>
            <h4>Glass: {drink.strGlass}</h4>
            <div className="flex-container-row">
                <span>Type: {drink.strAlcoholic}</span>
            </div>
            <h4>Ingredients</h4>
            <ul className="ingredients">
                {ingredientsArr.map((item, i) => {
                    return <li className="ingredient-item" key={i}>{item}</li>
                })}
            </ul>
            
            <div className="instructions">
                <h4>Instructions</h4>
                <p>{drink.strInstructions}</p>
            </div>
            </div>
            <div className="pic-div">
                <img src={drink.strDrinkThumb} className="pic" />
            </div>
        </div>
    )
}

export default Drink