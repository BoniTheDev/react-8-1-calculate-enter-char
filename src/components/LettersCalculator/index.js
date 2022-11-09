// Write your code here.

import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {textInput: '', letCount: 0}

  getEnterText = event => {
    const enterText = event.target.value

    this.setState({textInput: enterText, letCount: enterText.length})
  }

  render() {
    const {textInput, letCount} = this.state
    return (
      <div className="app-container">
        <div className="calculators-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image-details"
            alt="letters calculator"
          />
          <div className="calculator-card">
            <h1 className="calculator-heading">
              Calculate the Letters you enter
            </h1>
            <label className="label-heading" htmlFor="phrase">
              Enter the Phrase
            </label>
            <br />
            <input
              type="text"
              id="phrase"
              placeholder="Enter the Phrase"
              className="search-input"
              onChange={this.getEnterText}
              value={textInput}
            />
            <div className="count-card">
              <p className="count_letters">No.of Letters: {letCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
