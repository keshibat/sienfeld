import React from 'react';
import { Global, css } from '@emotion/core'
import Navigation from './components/Navigation';

function App() {
  return (
  <>
  <Global
    styles={css`
      body {
              margin: 0;
              padding: 0;
              background: linear-gradient(90deg,rgba(92,45,215,1),rgba(52,135,248,1));
            }
          `}
    />
      <div>
        <Navigation/>
      </div>
  </>
  );
}

export default App;
