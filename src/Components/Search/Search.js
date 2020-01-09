import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

import Name from './Name'
import Category from './Category'
import Recents from './Recents'
import CategorySearch from './CategorySearch'

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
            recents: [],
            searchFailed: false,
            raw: {},
            lastSearch: '',
            categorySearchEnabled: false,
        }
    }


    //method to update state from form changes
    getChange = (str) => {
        this.setState(prevState => ({searchField: str}))
        document.querySelector('#search').textContent = "Search"
    }

    //method to get category change
    getCategory = (str) => {
        this.setState(prevState => ({
            category: str,
            categorySearchEnabled: true,
        }))
        document.querySelector('#search').textContent = "Search"
    }

    //method to handle click, also triggered by keydown enter
    handleClick = () => {
        let searchTerm = this.state.searchField
        if (searchTerm !== '') {
            this.setState(prevState => ({
                searchField: '',
                lastSearch: searchTerm,
                categorySearchEnabled: false,
            }))
            this.nameSearch()

        } else if(this.state.categorySearchEnabled) {
            console.log("calling categorySearch")
            this.categorySearch()
        } else {
            let url = this.state.url + "random.php"
            this.apiCall(url)
        }
        

        document.querySelector('#search').textContent = "Get Random"
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
    }

    //method to start a search by category
    categorySearch = () => {
        let url = this.state.url + "filter.php?c=" + this.state.category
        this.apiCall(url)
        this.setState({category: 'Select Category',})
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
        this.setState({raw: res})
        if (res.drinks) {
            
            let drinks = Array.from(res.drinks)

            //if drinks is only one object render drink
            if (drinks.length === 1) {
                let recents = this.updateRecents(drinks[0].strDrink)
                this.setState({
                    category: 'Select Category',
                    drink: drinks[0],
                    recents: recents,
                    lastSearch: '',
                })
                //else if category sends results to resultsArray in state 
            } else if (this.state.categorySearchEnabled) {
                console.log("Category Search from handle results")
                this.setState(prevState => ({
                    category: 'Select Category',
                    drink: null,
                    resultsArray: drinks,
                    lastSearch: '',
                }))
                //else sends results to resultsArray in state
            }else {
                let recents = this.updateRecents(this.state.lastSearch)
                this.setState(prevState => ({
                    category: 'Select Category',
                    drink: null,
                    resultsArray: drinks,
                    recents: recents,
                    lastSearch: '',
                }))
            }
            //sets results to true so they can be rendered
            this.setState({
                results: true,
                searchFailed: false,
            })
        } else {
            this.setState({
                results: false,
                searchFailed: true,
            })
        }
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
            //else if category- render the category search
            }  else if (this.state.categorySearchEnabled) {
                this.setState({categorySearchEnabled: false,})
                console.log("Category Search from defineDetail")
                return (
                    <>
                        <Route path="/category-search" render={props => <CategorySearch secondSearch = {this.secondSearch} results={this.state.resultsArray} />} />
                        <Redirect push to="/category-search" />
                    </>
                )
            //else render all the results as links in search-results    
            }else {
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

    updateRecents = (str) => {
        let recents = this.state.recents
        if (recents.join(',').includes(`,${str},`)) {
        } else {
            if (recents.length > 4) {
                recents = recents.slice(1)
                recents.push(str)
            } else {
            recents.push(str)
            }
        }
            return recents
    }
    
    secondSearch = (str) => {
        let name = str
        let url = this.state.url + "search.php?s=" + name
        this.apiCall(url)
        this.setState({

        })
    }

    render () {
        
        //handle what will display in details depending on results of api call
        
        return (
            <div className="flex-container-column">
                <div className="search-items flex-container-column" onKeyDown={this.keyPressed}>
                    <Name searchField={this.state.searchField} getChange={this.getChange} />
                    <Category option={this.category} getCategory={this.getCategory} />
                    <button onClick={this.handleClick} id="search" >Get Random</button>
                    
                </div>
                {this.defineDetail()}
                { this.state.searchFailed ? <p id="info">That search didn't find results, try to broaden your search with a general term like "martini"</p> : '' }
                { this.state.recents.length > 1 ? <Recents recents={this.state.recents} recentSearch={this.secondSearch} /> : '' }
            </div>
        )
    }
}

export default Search