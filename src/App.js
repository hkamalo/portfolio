/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { Navigation } from 'react-tiger-transition';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  CssBaseline,
} from '@material-ui/core';
import Main from './components/General/Main';
import MenuBar from './components/General/MenuBar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});


export default function App() {
  const classes = useStyles();

  return (
    <Navigation>
      <div className={classes.root}>
        <CssBaseline />
        <MenuBar />
        <Toolbar />
        <Main />
      </div>
    </Navigation>
  );
}
