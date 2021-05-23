/* eslint-disable react/jsx-fragments */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-tiger-transition';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { Fade, Slide, Zoom } from '@material-ui/core';
import logo from '../logo_all/logo-proto-2/v2/logo_white_large.png';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        color: '#f1f1f1',
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
  header: {
    margin: 0,
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#051622',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#deb992',
    fontSize: 50,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      diplay: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  image: {
    margin: 0,
    padding: 0,
    width: 150,
    height: 18.2,
  },
  stack: {
    display: 'flex',
    justifyContent: 'center',
    width: '60vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      diplay: 'flex',
      flexWrap: 'wrap',
      width: '50vh',
    },
  },
  text: {
    borderRight: '1px solid',
    paddingRight: 20,
    marginRight: 10,
    paddingLeft: 10,
    marginLeft: 10,
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      fontSize: '10px',
    },
  },
  dev: {
    margin: 10,
    color: '#deb992',
    textDecoration: 'none',
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.image} src={logo} alt="" />
          <Link
            className={classes.dev}
            exact
            to="/informations"
            transition="glide-left"
          >
            <h1 className={classes.dev}>Développeur Web</h1>
          </Link>
        </div>
        <Fade
          in
          direction="right"
          timeout={2100}
          style={{ transitionDelay: '800ms' }}
        >
          <div className={classes.stack}>
            <p className={classes.text}>Html / CSS</p>
            <p className={classes.text}>Javascript</p>
            <p className={classes.text}>React</p>
            <p className={classes.text}>Node</p>
          </div>
        </Fade>
      </div>
    </>
  );
}
