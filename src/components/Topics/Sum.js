import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state ={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1 = e => {
        this.setState({number1: e.target.value})
    }

    handleChange2 = e => {
        this.setState({number2: e.target.value})
    }

    addNumbers = () => {
        let num1 = parseInt(this.state.number1);
        let num2 = parseInt(this.state.number2);
        let total = num1 + num2;
        this.setState({sum: total})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.handleChange1}></input>
                <input className="inputLine" onChange={this.handleChange2}></input>
                <button className="confirmationButton" onClick={this.addNumbers}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;