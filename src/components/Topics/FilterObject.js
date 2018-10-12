import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray:  [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    solveToy(userInput) {
        let newArray = [];
        let employees = this.state.unFilteredArray;
        for(let i = 0; i<employees.length; i++) {
           if (employees[i].hasOwnProperty(userInput)) {
               newArray.push(employees[i]);
           }
        }   
        this.setState({filteredArray: newArray})
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.solveToy(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;