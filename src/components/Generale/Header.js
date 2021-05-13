/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import logo from '../../logo/logo_white_large.png';

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
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.81)',
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 50,
    width: 'auto',
    margin: 5,
    padding: 2,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    fontSize: 50,
    margin: 0,
  },
  image: {
    margin: 0,
    padding: 0,
    width: 150,
    height: 28.9,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.image} src={logo} alt="" />
          <h1>Développeur Web</h1>
        </div>
        <div className={classes.menu}>
          <MuiThemeProvider theme={theme}>
            <NavLink exact to="/">
              <Button>Home</Button>
            </NavLink>
            <NavLink exact to="/projects">
              <Button>Projects</Button>
            </NavLink>
            <NavLink exact to="/contact">
              <Button color="primary">Contact</Button>
            </NavLink>
          </MuiThemeProvider>
        </div>
      </div>
    </>
  );
}
