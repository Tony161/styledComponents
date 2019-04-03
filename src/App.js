import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import Wrapper from "./components/Wrapper";
import HeaderText from "./components/HeaderText";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import styled, { keyframes } from "styled-components";

const theme = {
  font: "Calibri"
};

const Outer = styled.div`
  text-align: center;
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation:${ spin} infinite 20s linear;
  ${ props => props.backwards && 'animation-direction: reverse;'}
  height: 300px;
`

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <HeaderText>Styled Components Test Job</HeaderText>
          <Header />
          <HeaderText>Something like this</HeaderText>
          <Outer>
            <Logo src={logo} alt="logo" />
            <Logo backwards src={logo} alt="logo" />
          </Outer>
          <Statistics />
          <Outer>
            <iframe
              src="https://player.twitch.tv/?channel=starladder5&muted=false"
              height="720"
              width="960"
              frameborder="0"
              scrolling="no"
              allowfullscreen="true">
            </iframe>
          </Outer>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
