/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, glide } from 'react-tiger-transition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        color: '#87CEFA',
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
});

const useStyles = makeStyles({
  menu: {
    width: '100vw',
    height: '50px',
    display: 'flex',
    padding: 20,
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0px',
    right: 0,
    color: '#deb992',
    background: '#051622',
    zIndex: '1',
  },
  link: {
    display: 'flex',
    padding: 20,
  },
  button: {},
});

glide({
  name: 'glide-left',
  duration: 800,
});

export default function MenuBar() {
  const classes = useStyles();
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} color="#87CEFA" />;
  const iconGithub = <FontAwesomeIcon icon={faGithubSquare} color="#87CEFA" />;
  return (
    <>
      <AppBar>
        <Toolbar className={classes.menu}>
          <div className={classes.links}>
            <IconButton
              variant="link"
              href="https://www.linkedin.com/in/heran%C3%A7a-kamalo-5075bb124/"
              target="_blank"
            >
              {iconLinkedin}
            </IconButton>
            <IconButton
              variant="link"
              href="https://github.com/hkamalo"
              target="_blank"
            >
              {iconGithub}
            </IconButton>
          </div>
          <div>
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
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}