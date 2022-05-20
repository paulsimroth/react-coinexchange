import './App.css';
import logo from "./logo.svg";
import Coin from "./components/Coin/Coin";
import AccountBalance from "./components/AccountBalance/AccountBalance";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React Logo" className="App-logo"/>
        <h1 className="App-title">
          Coin Exchange 
        </h1>
      </header>
      <AccountBalance amount={10000}/>
      <table className="Coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={28000.00} />
          <Coin name="Ethereum" ticker="ETH" price={2000.00} />
          <Coin name="Tether" ticker="USDT" price={1.00}/>
          <Coin name="Cardano" ticker="ADA" price={0.5} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
