import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Name from './Name'
import Recents from './Recents'

import '../../App.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchField: '',
            url:"https://www.thecocktaildb.com/api/json/v1/1/",
            results: false,
            resultsArray: [],
            drink: null,
            recents: [],
        }
    }


    //method to update state from form changes
    getChange = (str) => {
        this.setState(prevState => ({searchField: str}))
        document.querySelector('#search').textContent = "Search"
    }

    //method to handle click, also triggered by keydown enter
    handleClick = () => {
        if (this.state.searchField !== '') {
            this.nameSearch()
        } else {
            let url = this.state.url + "random.php"
            this.apiCall(url)
        }
        this.setState(prevState => ({
            searchField: '',
        }))

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
            let recents = this.updateRecents(drinks[0].strDrink)
            this.setState({
                drink: drinks[0],
                recents: recents,
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
            //else render all the results as links in search-results
            }  else {
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
        if (recents.length > 4) {
            recents = recents.slice(1)
            recents.push(str)
        } else {
        recents.push(str)
        }
        return recents
    }
    
    recentSearch = (str) => {
        let name = str
        let url = this.state.url + "search.php?s=" + name
        this.apiCall(url)
    }

    render () {
        
        //handle what will display in details depending on results of api call
        
        return (
            <div className="flex-container-column">
                <div className="search-items flex-container-column" onKeyDown={this.keyPressed}>
                    <Name searchField={this.state.searchField} getChange={this.getChange} />
                    <button onClick={this.handleClick} id="search" >Get Random</button>
                </div>
                {this.defineDetail()}
                <Recents recents={this.state.recents} recentSearch={this.recentSearch} />
            </div>
        )
    }
}

export default Search