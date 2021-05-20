/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, glide } from 'react-tiger-transition';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Button,
} from '@material-ui/core';
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
  menu: {
    width: '100vw',
    height: '50px',
    margin: '0px',
    display: 'flex',
    padding: '0px',
    justifyContent: 'flex-end',
    position: 'fixed',
    top: '0px',
    right: 0,
    color: '#deb992',
    background: '#051622',
    zIndex: '1',
  },
});

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// };

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**

//   window: PropTypes.func,
// };

glide({
  name: 'glide-left',
  duration: 800,
});

export default function MenuBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar className={classes.menu}>
          <MuiThemeProvider theme={theme}>
            <Link exact to="/" transition="glide-left">
              <Button>Accueil</Button>
            </Link>
            <Link exact to="/informations" transition="glide-left">
              <Button>Informations</Button>
            </Link>
            <Link exact to="/contact" transition="glide-left">
              <Button color="primary">Contact</Button>
            </Link>
          </MuiThemeProvider>
        </Toolbar>
      </AppBar>
    </>
  );
}
