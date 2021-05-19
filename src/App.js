import React, { useState } from 'react';
import { Navigation, Route, Screen, Link, glide } from 'react-tiger-transition';
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

document.getElementById('root').style.height = '100vh';

export default function App() {
  const classes = useStyles();

  return (
    <Navigation>
      <div className={classes.root}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Navigation>
  );
}
