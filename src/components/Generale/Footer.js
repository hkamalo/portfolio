import React from 'react';
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    backgroundColor: 'rgba(51, 51, 51, 1)',
    position: 'relative',
    bottom: 0,
    margin: 0,
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 50,
    width: 'auto',
    margin: 5,
    padding: 2,
  },
  component: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.component}>footer</div>
    </footer>
  );
}
