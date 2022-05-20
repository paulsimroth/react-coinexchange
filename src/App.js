import CoinList from "./components/CoinList/CoinList";
import ExchangeHeader from "./components/ExchangeHeader/ExchangeHeader";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  background-color: rgb(60, 111, 168);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 28000,
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 2000,
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 1,
        },
        {
          name: "Cardano",
          ticker: "ADA",
          price: 0.5,
        },
        {
          name: "BNB",
          ticker: "BNB",
          price: 305.0,
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const coin  = this.state.coinData.find(({ticker}) => ticker === valueChangeTicker);
    console.log(coin);
  }

  render() {
      return (
    <Div className="App">
      <ExchangeHeader/>
      <AccountBalance amount={this.state.balance}/>
      <CoinList coinData = {this.state.coinData} handleRefresh = {this.handleRefresh}/>
    </Div>
  );
  }
}

export default App;