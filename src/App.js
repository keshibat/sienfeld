import React, { useState } from 'react';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Clarifai from 'clarifai'
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

const app = new Clarifai.App({
 apiKey: 'f2680265925947aab7e4b7a36b58b318'
});

function App() {
  const [ input, setInput ] = useState('')
   const handleInputchange = (e) => {
     setInput(e.target.value);
     console.log(e.target.value);
   }

   const onButtonSubmit = () => {
    console.log('click it');
    app.models.predict('d02b4508df58432fbb84e800597b8959', "https://picsum.photos/id/237/200/300").then(
      function(response) {
        console.log(response);
      },
      function(error){
        console.log(error)
      });
   }

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
      <ImageLinkForm handleInputchange={handleInputchange} onButtonSubmit={onButtonSubmit}/>
  </>
  );
}

export default App;
