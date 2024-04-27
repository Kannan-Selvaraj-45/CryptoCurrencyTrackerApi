// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails

  return (
    <li className="cryptoList">
      <div className="logo-type-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="crypto-type">{currencyName}</p>
      </div>
      <div className="usd-euro-value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
