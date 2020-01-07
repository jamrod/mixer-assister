import React, { Component } from 'react'

import Name from './Name'
import Category from './Category'
import Details from '../Details/Details'

import '../../App.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchField: '',
            category: 'Select Category',
            url:"https://www.thecocktaildb.com/api/json/v1/1/",
            results: false,
            resultsArray: [],
            drink: null,
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
        let drinks = Array.from(res.drinks)
        console.log(drinks)
        console.log(drinks.length)
        if (drinks.length === 1) {
            this.setState({
                drink: drinks[0]
            })
        } else {
            this.setState({
                resultsArray: drinks
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
            if (this.state.drink) {
                detail = <Details searching={false} drink={this.state.drink} />
            } else {
                detail = <Details searching={true} drinks={this.state.resultsArray} />
            }
            
        }
        return (
            <div className="flex-container-column">
                <div className="search-items">
                    <Name searchField={this.state.searchField} getChange={this.getChange} />
                    <Category option={this.state.category} getChange={this.getChange} />
                    <button onClick={this.handleClick}>Search</button>
                </div>
                
                {detail}
            </div>
        )
    }
}

export default Search