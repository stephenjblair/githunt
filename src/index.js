import React from 'react';
import ReactDOM from 'react-dom';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { App } from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


