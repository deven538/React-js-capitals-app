import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  updateCapital = event => {
    const capital = event.target.value

    this.setState({activeCapitalId: capital})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="section-container">
            <select
              onChange={this.updateCapital}
              value={activeCapitalId}
              className="options-container"
            >
              {countryAndCapitalsList.map(eachCity => (
                <option key={eachCity.id} value={eachCity.id}>
                  {eachCity.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description"> is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
