// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)

    const {destinationsList} = props
    this.state = {
      searchInput: '',
      destinationsList1: destinationsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinationsList1} = this.state
    const searchResults = destinationsList1.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input-styles"
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
