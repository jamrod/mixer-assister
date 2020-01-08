import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'


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

    //method to update state from form changes
    getChange = (isName, str) => {
        if (isName) {
        this.setState(prevState => ({searchField: str}))
        } else {
            this.setState(prevState => ({category: str}))
        }
    }

    //method to handle click, also triggered by keydown enter
    handleClick = () => {
        if (this.state.searchField !== '') {
            this.nameSearch()
        } else if (this.state.category !== 'Select Category') {
            this.categorySearch()
        } else {
            let url = this.state.url + "random.php"
            this.apiCall(url)
        }
        this.setState(prevState => ({
            category: '',
            searchField: '',
        }))
    }

    // method to handle keydown to capture enter
    keyPressed = (e) => {
       if  (e.key === "Enter") {
        this.handleClick()
       }
    }

    //method to start a search by name
    nameSearch = () => {
        let name = this.state.searchField.toLowerCase()
        let url = this.state.url + "search.php?s=" + name
        this.apiCall(url)
        this.setState(prevState => ({
            category: 'Select Category',
            twoLevel: false,
        }))
    }

    //method to start a category search
    categorySearch = () => {
        console.log("category " + this.state.category)
        this.setState(prevState => ({
            drink: null,
            twoLevel: true,
        }))
        let url = this.state.url + "filter.php?c=" + this.state.category
        this.apiCall(url)
    }

    //API call, passes results to handleResults
    apiCall(url) {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.handleResults(response)
        })
        .catch(err => {
            console.error(err)
        })
    }

    //handles results of API call
    handleResults = (res) => {
        console.log("handleResults" + res.drinks)
        let drinks = Array.from(res.drinks)

        //if drinks is only one object render drink
        if (drinks.length === 1) {
            this.setState({
                drink: drinks[0]
            })
            //else sends results to resultsArray in state
        } else {
            this.setState(prevState => ({
                resultsArray: drinks
            }))
        }
        //sets results to true so they can be rendered
        this.setState({
            results: true
        })
    }

    defineDetail = () => {
        
        if (this.state.results) { //if got results
            if (this.state.drink) { //if got a single drink, render Drink
                return (
                <Redirect push to={{ 
                    pathname: "/drink/" + this.state.drink.strDrink,
                    state: {
                        drink: this.state.drink,
                    }
                }} />
                )
            //else if got a return from a category search, use TwoLevelSearch, pass in nameSearch so it can be run on final selection
            } else if (this.state.twoLevel){ 
                return (
                    <>
                    <Redirect push to={{
                        pathname: "/two-search",
                        state: {
                            results: this.state.resultsArray,
                        }
                    }} />
                    <Route path="/two-search" render={props => <TwoLevelSearch nameSearch = {this.nameSearch} results={this.state.resultsArray} />} />
                    </>
                // <TwoLevelSearch results={this.state.resultsArray} nameSearch={this.nameSearch} />
                )
            //else display search results when received multiple complete drink objects
            } else if (!this.state.twoLevel){
                return (
                <Redirect push to={{
                    pathname: "/search-results",
                    state: {
                        results: this.state.resultsArray,
                    }
                }} />
                )
            }
            
        }
    }

    render () {
        
        //handle what will display in details depending on results of api call
        let detail 
        
        return (
            <div className="flex-container-column">
                <div className="search-items" onKeyDown={this.keyPressed}>
                    <Name searchField={this.state.searchField} getChange={this.getChange} />
                    <Category option={this.state.category} getChange={this.getChange} />
                    <button onClick={this.handleClick}>Search</button>
                </div>
                {this.defineDetail()}
                <Route path="/two-search" render={props => <TwoLevelSearch nameSearch = {this.nameSearch} results={this.state.resultsArray} />} />
            </div>
        )
    }
}

export default Search