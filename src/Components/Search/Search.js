import React, { Component } from 'react'

import Name from './Name'
import Category from './Category'
import Details from '../Details/Details'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchField: '',
            category: 'Select Category',
            url:"https://www.thecocktaildb.com/api/json/v1/1/",
            results: false,
            resultsArray: [],
            drink: {},
        }
    }

    getChange = (isName, str) => {
        if (isName) {
        this.setState({searchField: str})
        } else {
            this.setState({category: str})
        }
    }

    handleClick = (e) => {
        if (this.state.searchField !== '') {
            this.nameSearch()
        } else if (this.state.category !== 'Select Category') {
            this.categorySearch()
        } else {
            let url = this.state.url + "random.php"
            this.apiCall(url)
        }
        this.setState({
            category: '',
            searchField: '',
        })
    }

    nameSearch = () => {
        let name = this.state.searchField.toLowerCase()
        let url = this.state.url + "search.php?s=" + name
        this.apiCall(url)
    }

    categorySearch = () => {
        let url = this.state.url + "filter.php?c=" + this.state.category
        this.apiCall(url)
    }

    apiCall(url) {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.handleResults(response)
            //renderCategories(response.drinks)
            //renderDrink(response.drinks[0])
        })
        .catch(err => {
            console.error(err)
        })
    }

    handleResults = (res) => {
        console.log(res) 
        if (res.drinks.length === 1) {
            this.setState({
                drink: res.drink[0]
            })
        }
        this.setState({
            results: true
        })
    }

    render () {
        //TODO finish this Details code
        let detail
        if (this.state.results) {
            detail = <Details drink={this.state.drink} />
        }
        return (
            <div className="flex-container-column">
                <Name searchField={this.state.searchField} getChange={this.getChange} />
                <Category option={this.state.category} getChange={this.getChange} />
                <button onClick={this.handleClick}>Search</button>
                
                <Details />
            </div>
        )
    }
}

export default Search