import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import logo from '../../logo_all/logo-proto-2/v1/logo_small_icon_only_inverted.png';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const useStyles = makeStyles({
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '50%',
    MaxWidth: '100%',
    textAlign: 'justify',
  },
  // imageBg: {
  //   borderRadius: '50%',
  //   width: 50,
  //   height: 50,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  image: {
    margin: 10,
    padding: 10,
    width: '1em',
    height: '1em',
    borderRadius: '50%',
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutSection}>
      <div className={classes.text}>
        <h2>About</h2>
        <p>
          Après un parcours en centré sur le business et le management j’ai décidé d’évoluer dans le numérique, poussé par l'envie d'entreprendre et la liberté de création
          du métier de développeur.
        </p>
      </div>
      <ContactSupportIcon style={{ fontSize: 100 }} outlined />
    </div>
  );
}
