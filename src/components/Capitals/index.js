import {Component} from 'react'

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
  state = {countrys: countryAndCapitalsList[0]}

  countryName = event => {
    const result = countryAndCapitalsList.filter(
      eachObject => event.target.value === eachObject.id,
    )
    console.log(result)
    this.setState({countrys: result[0]})
  }

  render() {
    const {countrys} = this.state
    const {capitalDisplayText, country, id} = countrys
    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>

          <select id="form" onChange={this.countryName}>
            {countryAndCapitalsList.map(eachList => (
              <option key={eachList.id} value={eachList.id}>
                {eachList.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="form">is capital of which country</label>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
