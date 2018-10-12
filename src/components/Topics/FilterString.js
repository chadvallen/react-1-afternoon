import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray:  [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput: '',
            filteredArray: []
        }
    }

    inputHandler = e => {
        this.setState({userInput: e.target.value})
    }

    filterThroughArray(val) {
        let newArray = [];
        let names = this.state.unFilteredArray;
        for (let i = 0; i<names.length; i++) {
            if (names[i].includes(val)) {
                newArray.push(names[i]);
            }
        }
        
       this.setState({filteredArray: newArray})
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.inputHandler}></input>  
                <button className="confirmationButton" onClick={() => this.filterThroughArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;