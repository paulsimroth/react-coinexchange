import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const TD = styled.td`
    border: 1px solid #ccc;
    width: 25vh;
`;

export default class Coin extends Component {

    handleClick = (event) => {
        //Prevent default of submitting form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);
    }

    render(){
        return(
        <tr>
            <TD>{this.props.name}</TD>
            <TD>{this.props.ticker}</TD>
            <TD>${this.props.price}</TD>
            {this.props.showBalance? <TD>{this.props.balance}</TD> : null}
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
