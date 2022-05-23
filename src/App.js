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
  state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          balance: 0.5,
          price: 28000,
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          balance: 15,
          price: 2000,
        },
        {
          name: "Tether",
          ticker: "USDT",
          balance: 500,
          price: 1,
        },
        {
          name: "Cardano",
          ticker: "ADA",
          balance: 1000,
          price: 0.5,
        },
        {
          name: "BNB",
          ticker: "BNB",
          balance: 20,
          price: 305.0,
        }
      ]
    }

  handleBalanceVisibility = () => {
    this.setState(function (oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData  = this.state.coinData.map( function(values) {

      let newValues = {...values};

      if(valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
                newValues.price = newValues.price * randomPercentage;
            };
      return newValues;

    });

    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount = {this.state.balance} 
                        showBalance = {this.state.showBalance} 
                        handleBalanceVisibility={this.handleBalanceVisibility}/>

        <CoinList       coinData = {this.state.coinData} 
                        showBalance = {this.state.showBalance}
                        handleRefresh = {this.handleRefresh}/>
      </Div>
  );
  }
}

export default App;