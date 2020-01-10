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

    //method to divide up the results so they can be paginated
    divideArray = (arr, num) => {
        let outArr = []
        while (arr.length > num) {
            let chunk = arr.slice(0,num)
            outArr.push(chunk)
            arr = arr.slice(num)
        }
        if (arr.length >= 1) {
            outArr.push(arr)
        }
        return outArr
    }

    //method to change through results pages
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

    //method to determine the way the results will render based on the number of results
    determineRender = () => {
        //don't render until pages array is built
        if (this.state.pagesArray.length === 0) { return
        }
        //if only one page then render without pagination
        if (this.state.pagesArray.length === 1) {
            return (
                <div className="flex-container-row search-results">
                {this.props.results.map((item, i) => (
                <div onClick={() => this.props.secondSearch(item.idDrink)} key={i} className="flex-container-column result-cell" >
                    <div className="thumb-label">
                        <p>{item.strDrink}</p>
                        <img src={item.strDrinkThumb} className="thumbs" alt="thumb" />
                    </div>
                </div>
            ))}
                </div>
            )
        //else render with pagination, 'previous' button will only render after 1st page and 'next' will not render on last page
        } else {
            return (
                <div className="flex-container-row search-results">
                    {this.state.pagesArray[this.state.page].map((item, i) => (
                        <div onClick={() => this.props.secondSearch(item.idDrink)} key={i} className="flex-container-column result-cell" >
                            <div className="thumb-label">
                                <p>{item.strDrink}</p>
                                <img src={item.strDrinkThumb} className="thumbs" alt="thumb" />
                            </div>
                        </div>
                    ))}
                    <div className="flex-container-row page-buttons">
                        {this.state.page >= 1 ? <button onClick={()  => this.changePage(false)}>Previous</button> : ''}
                        {this.state.page < this.state.pagesArray.length -1 ? <button onClick={() => this.changePage(true)}>Next</button> : ''}
                    
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        const results = this.props.results
        let pagesArr = this.divideArray(results,12)
            this.setState({
                pagesArray: pagesArr,
            })
    }
    
    
        render() {
            
        return (
        <div className="flex-container-column details">
            <h3>Search Results</h3>
            {this.determineRender()}
            
        </div>
        )
    }
}

export default CategorySearch