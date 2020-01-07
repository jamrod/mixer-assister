import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


import Name from './Name'
import Category from './Category'
import TwoLevelSearch from './TwoLevelSearch'
// import Details from '../Details/Details'
// import Drink from '../Details/Drink'

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
            twoLevel: false,
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
        this.setState({
            drink: null,
            twoLevel: true,
        })
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

        //if drinks is only one object render drink
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
        
        let detail
        if (this.state.results) {
            if (this.state.drink) {
                detail = <Redirect push to={{
                    pathname: "/drink/" + this.state.drink.strDrink,
                    state: {
                        drink: this.state.drink,
                    }
                }} />
            } else if (this.state.twoLevel){
                detail = <TwoLevelSearch results={this.resultsArray} nameSearch={this.nameSearch} />
            }
            {
                console.log("call searchResults")
                detail = <Redirect push to={{
                    pathname: "/search-results",
                    state: {
                        results: this.state.resultsArray,
                    }
                }} />
                
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