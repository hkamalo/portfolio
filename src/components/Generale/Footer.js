/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
    backgroundColor: '#051622',
    position: 'relative',
    bottom: 0,
    margin: 0,
  },
  component: {
    color: 'white',
  },
});

export default function Footer() {
  const classes = useStyles();
  const iconLinkedin = (
    <FontAwesomeIcon icon={faLinkedin} size="2x" color="#87CEFA" />
  );
  const iconGithub = (
    <FontAwesomeIcon icon={faGithubSquare} size="2x" color="#87CEFA" />
  );

  return (
    <footer className={classes.footer}>
      <div className={classes.component}>{iconLinkedin}</div>
      <div className={classes.component}>{iconGithub}</div>
    </footer>
  );
}
