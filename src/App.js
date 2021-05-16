import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Generale/Header';
import Main from './components/Generale/Main';
import Footer from './components/Generale/Footer';
import { ScrollHandlerContextProvider } from './contexts/ScrollHandler';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <ScrollHandlerContextProvider>
      <div className={classes.root}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ScrollHandlerContextProvider>
  );
}
