import React, { Component } from 'react'

import '../../App.css'

class Name extends Component {
    constructor(props) {
        super(props)  
    }

    componentDidMount() {
        this.input.focus()
    }
    render (){
        return(
            <div className="flex-container-row name-input">
                <label>Search by Name </label>
                <input
                ref={(input) => {this.input = input}}  type="text" id="name-search" value={this.props.searchField} onChange={ (e) => {{this.props.getChange(e.target.value)}}}></input>
            </div>
        )
    }
}

export default Name