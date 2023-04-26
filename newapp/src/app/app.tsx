// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './app.module.css';
import { UiText } from '@shivdemo/shared-ui';
import { HashRouter, Route, Routes } from 'react-router-dom';
import InvalidSession from '../errorState/InvalidSession';
import { Typography } from '@mui/material';


const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B7A80',
    },
    secondary: {
      main: '#3F5261',
    },
    background: {
      default: '#fff',
    },
    error: {
      main: '#E0284A',
    },
    grey: {
      100: '#EFF7FD',
      200: '#D9E6F0',
      300: '#B4C3D0',
      400: '#DCDCE6',
    },
  },
  spacing: [4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96],
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
});


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Routes>
          <Route path='/call-ended' element={<InvalidSession />} />
          <Route path='/invalid' element={<InvalidSession />} />
        </Routes>
      </HashRouter>
      <p>
        This is the main
      </p>
      <Typography>
        Typo message
      </Typography>
      <div>
        <UiText weight='bold_700' variant='truck_175'>Hello</UiText>
      </div>
    </ThemeProvider>
  );
}

export default App;
