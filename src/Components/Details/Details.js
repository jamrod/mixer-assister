import React from 'react'
// import { Route, Switch, Redirect} from "react-router-dom"
// import Drink from './Drink'

import '../../App.css'

function Details (props) {
    console.log("Details " + props)
    return (
        <div className="flex-container-column">
            <h1>Results will show here</h1>
        </div>
    )
    // let searching = props.searching
    // let output
    // if (searching) {
    //     return (
    //         <div className="flex-container">
    //             <h1>Searching</h1>
    //         </div>
    //     )
    //     // output = "Searching"
    // } else {
    //     return (
    //         <div className="flex-container">
    //             <Redirect push to={{
    //                 pathname: "/drink/" + props.drink.strDrink,
    //                 state: {
    //                     drink: props.drink,
    //                 }
    //             }} 
    //             />
    //         </div>
    //     )
    //     //output = <Drink drink={props.drink}/>//props.drink.strDrink
    // }
    // return (
    //     <div className="flex-container">
            
    //         {/* <h1>{output}</h1> */}
    //     </div>
    // )
}

export default Details