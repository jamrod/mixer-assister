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
        console.log(this.state.pagesArray)
        if (this.state.pagesArray.length === 0) { return
        }
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