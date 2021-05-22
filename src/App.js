/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigation, Route, Screen, Link, glide } from 'react-tiger-transition';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Toolbar, CssBaseline, useScrollTrigger } from '@material-ui/core';
import Main from './components/General/Main';
import MenuBar from './components/General/MenuBar';

const theme = createMuiTheme();

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function App(props) {
  const classes = useStyles();

  return (
    <Navigation>
      <div className={classes.root}>
        <CssBaseline />
        <ElevationScroll {...props}>
          <MenuBar />
        </ElevationScroll>
        <Toolbar />
        <Main />
      </div>
    </Navigation>
  );
}
