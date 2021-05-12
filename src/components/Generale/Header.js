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
    height: 250,
    width: 'auto',
    backgroundColor: 'black',
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
    color: 'white',
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
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
        <div className={classes.title}>
          <h1>Développeur Web</h1>
        </div>
      </div>
    </>
  );
}
