import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {userInput: ''}

  change = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {userInput} = this.state
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading"> Destination Search </h1>
          <div className="input-container">
            <input
              type="search"
              className="input"
              placeholder="Search"
              onChange={this.change}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-container">
            {searchResults.map(eachPlace => (
              <DestinationItem place={eachPlace} key={eachPlace.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
