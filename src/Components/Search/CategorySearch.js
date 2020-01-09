import React, { Component } from "react"
 
import '../../App.css'

class CategorySearch extends Component {
    constructor (props) {
        super (props)
        this.state = {
            pagesArray: [],
            page: 0,
        }
    }

    divideArray = (arr) => {
        while (arr.length > 10) {
            let chunk = arr.slice(0,10)
            this.state.pagesArray.push(chunk)
            arr = arr.slice(10)
        }
        if (arr.length >= 1) {
            this.state.pagesArray.push(arr)
        }
    }

    changePage = (bool) => {
        let current = this.state.page
        if (bool) {
            this.setState({
                page: current + 1,
            })
        } else {
            this.setState({
                page: current - 1,
            })
        }
    }

    determineRender = () => {
        if (this.state.pagesArray.length === 1) {
            return (
                <div className="flex-container-row search-results">
                {this.props.results.map((item, i) => (
                <div onClick={() => this.props.secondSearch(item.strDrink)} key={i} className="flex-container-column result-cell" >
                    {item.strDrink}
                    <img src={item.strDrinkThumb} className="thumbs" alt="thumb" />
                </div>
            ))}
                </div>
            )
        } else {
            return (
                <div className="flex-container-row search-results">
                    {this.state.pagesArray[this.state.page].map((item, i) => (
                        <div onClick={() => this.props.secondSearch(item.strDrink)} key={i} className="flex-container-column result-cell" >
                            {item.strDrink}
                            <img src={item.strDrinkThumb} className="thumbs" alt="thumb" />
                        </div>
                    ))}
                    <div className="flex-container-row page-buttons">
                        {this.state.page >= 1 ? <button onClick={()  => this.changePage(false)}>Previous</button> : ''}
                        {this.state.page < this.state.pagesArray.length ? <button onClick={() => this.changePage(true)}>Next</button> : ''}
                    
                    </div>
                </div>
            )
        }
    }
    
    
        render() {
            const results = this.props.results
            this.divideArray(results)

            
        return (
        <div className="flex-container-column details">
            <h3>Search Results</h3>
            {this.determineRender()}
            
        </div>
        )
    }
    
}

export default CategorySearch