// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDataList()
  }

  getCryptoDataList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedCryptoList = data.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      id: eachData.id,
      usdValue: eachData.usd_value,
    }))

    this.setState({cryptoList: updatedCryptoList, isLoading: false})
  }

  cryptoCurrencyData = () => {
    const {cryptoList} = this.state
    console.log(cryptoList)
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
            alt="cryptocurrency"
            className="image"
          />

          <div className="background-container">
            <div className="header">
              <p className="coin-type">Coin Type</p>
              <div className="usd-euro-container">
                <p className="coin-type">USD</p>
                <p className="coin-type">EURO</p>
              </div>
            </div>
            <ul className="crypto-container">
              {cryptoList.map(eachItem => (
                <CryptoCurrencyItem
                  cryptoDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.cryptoCurrencyData()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
