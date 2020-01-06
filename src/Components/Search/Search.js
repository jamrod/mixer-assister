import React, { Component } from 'react'

import Name from './Name'
import Category from './Category'
import Details from '../Details/Details'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchField: '',
            category: '',
            url:"https://www.thecocktaildb.com/api/json/v1/1",
            results: false,
            searchDone: false,
        }
    }

    getChange(isName, str) {
        if (isName) {
        this.setState({searchField: str})
        } else {
            this.setState({category: str})
        }
    }

    handleClick(e){
        console.log("Search Clicked" + this.state.category + " " + this.state.searchField)
        this.setState({
            category: '',
            searchfield: '',
        })
    }

    nameSearch() {
        console.log("search for " + this.state.searchField)
    }

    categorySearch() {
        console.log("categorySearch")
    }

    apiCall(url) {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //renderCategories(response.drinks)
            //renderDrink(response.drinks[0])
        })
        .catch(err => {
            console.error(err)
        })
    }

    render () {
        return (
            <div className="flex-container-column">
                <Name />
                <Category />
                <Details />
            </div>
        )
    }
}

export default Search