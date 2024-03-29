import React, { Component } from 'react';
import logo from "../../logo.svg";
import styled from "styled-components";

const Img = styled.img`
    height: 6rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
`;

const H1 = styled.h1`
    font-size: 3.5rem;
    color: white;
    line-heigth: 8rem;
    font-weight: bold;
    min-width: 300px;
`;

export default class ExchangeHeader extends Component {
  render() {
    return (
        <Header>
            <Img src={logo} alt="React Logo"/>
            <H1>
                Coin Exchange Project
            </H1>
        </Header>
    )
  }
};