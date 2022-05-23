import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section `
    font-size: 2rem;
    background-color: rgb(104, 194, 164);
    text-align: left;
    padding-left: 1.5rem o 1.5rem 5rem;
    color: black;
    
`;

export default class AccountBalance extends Component {
  render() {
    const buttonText = this.props.showBalance ? "Hide Balance" : "Show Balance";
    let content = null;
    if (this.props.showBalance) {
      content = <>Balance: ${this.props.amount}</>;
    }
    return (
      <Section>
        {content}
        <button onClick={this.props.handleBalanceVisibility}>{buttonText}</button>
      </Section>
    );
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}