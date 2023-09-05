import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers'
import { useDispatch } from 'react-redux'
import './assets/css/Main.css'
import Cookies from 'js-cookie'

function App() {

  
  

  const theme = extendTheme({
    colors: {
      brand: {
        900: '#1a365d',
        800: '#7a7a7a',
        700: '#2a69ac',
      },
      dashbg:
      {
        100:'#212121'
      },
      pHeading: {
        100: '#dc0b9b',
      },
      primaryText: {
        100: '#dc0b9b',
        200: '#7a7f83',
        300: '#808080',
        400: '#666e82'
      },
      primaryHeading: {
        100: '#dc0b9b',
        
      },
      primaryBgDarkBlue: {
        100: '#dc0b9b'
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('user') !== null) {
        let user = JSON.parse(localStorage.getItem('user') ?? '{}')
        dispatch(loadUser(user))
      } else if (Cookies.get('user') !== undefined) {
        let user = JSON.parse(Cookies.get('user') ?? '{}')
        dispatch(loadUser(user))
      }
    })()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
