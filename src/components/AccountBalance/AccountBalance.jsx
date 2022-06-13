import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section `
    font-size: 2rem;
    background-color: rgb(104, 194, 164);
    text-align: left;
    padding-left: 1.5rem o 1.5rem 5rem;
    color: black;
    
`;

export default function AccountBalance(props) {
  const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
  let content = null;
  if (props.showBalance) {
    content = <>Balance: ${props.amount}</>;
  }
  return (
    <Section>
      {content}
      <button onClick={props.handleBalanceVisibility}>{buttonText}</button>
    </Section>
  );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}