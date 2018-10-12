import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    inputHandler = e => {
        this.setState({userInput: e.target.value})
    }

    palindromeTester = () => {
        let array1 = (this.state.userInput).split('');
        
        let array2 = array1.reverse().join('');
        
        
        let answer = '';
        if (array2 === this.state.userInput) {
            
            answer = "true";
        } else {
            
            answer = "false";
        }
        this.setState({palindrome: answer})
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.inputHandler}></input>
                <button className="confirmationButton" onClick={this.palindromeTester}>Test</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;