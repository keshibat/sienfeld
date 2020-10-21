import React from 'react';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank'

const GlobalStyle = css`
  body {
        margin: 0;
        padding: 0;
        background: linear-gradient(90deg,rgba(92,45,215,1),rgba(52,135,248,1));
       }
`;

const HeaderDiv = styled.div(props => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

function App() {
  return (
  <>
  <Global
    styles={GlobalStyle}
    />
      <HeaderDiv>
        <Logo/>
        <Navigation/>
      </HeaderDiv>
      <Rank/>
      <ImageLinkForm/>

  </>
  );
}

export default App;
