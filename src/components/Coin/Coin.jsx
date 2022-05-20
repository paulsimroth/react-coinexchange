import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const TD = styled.td`
    border: 1px solid #ccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }

    /* Price gets updated every 1500 milliseconds
    componentDidMount(){
        const callback = () => {
            // set state to new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            this.setState(function(oldState){
                return{
                    price: oldState.price * randomPercentage
                };
            })
        }
        setInterval(callback, 1500);
    }
    */
    handleClick(event){
        //Prevent default of submitting form
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;

        this.setState(function(oldState){
            return{
                price: oldState.price * randomPercentage
            };
        })
    }

    render(){
        return(
        <tr>
            <TD>{this.props.name}</TD>
            <TD>{this.props.ticker}</TD>
            <TD>${this.state.price}</TD>
            <TD>
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>   
                </form>
            </TD>
        </tr>
        );
    };
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
