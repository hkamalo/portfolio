/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Navigation, Route, Screen, Link, glide } from 'react-tiger-transition';
import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import logo from '../../logo_all/logo-proto-2/v2/logo_white_large.png';
import ScrollHandlerContext from '../../contexts/ScrollHandler';

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
    width: 'auto',
    height: '50px',
    margin: '5px',
    display: 'flex',
    padding: '0px',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: '-30px',
    right: 0,
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
    height: 18.2,
  },
});

glide({
  name: 'glide-left',
  duration: 800,
});

export default function Header() {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false); 

 

  window.addEventListener('scroll', () => {
    console.log(window.scrollY); 
    if (window.scrollY > 809) {
      setShowMenu(true);
    }
    if (window.scrollY < 809) {
      setShowMenu(false);
    }
  });

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.image} src={logo} alt="" />
          <h1>Développeur Web</h1>
        </div>
        <div className={classes.menu} style={{ opacity: showMenu ? 1 : 0 }}>
          <MuiThemeProvider theme={theme}>
            <Link exact to="/" transition="glide-left">
              <Button>Home</Button>
            </Link>
            <Link exact to="/projects" transition="glide-left">
              <Button>Projects</Button>
            </Link>
            <Link exact to="/contact" transition="glide-left">
              <Button color="primary">Contact</Button>
            </Link>
          </MuiThemeProvider>
        </div>
      </div>
    </>
  );
}
