/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles({
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '70vh',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    textAlign: 'justify',
    margin: 20,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  text: {
    margin: 50,
  },
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
      <div className={classes.content}>
        <h2>About</h2>
        <p className={classes.text}>
          Après un parcours en centré sur le business et le management j’ai
          décidé d’évoluer dans le numérique, poussé par l'envie d'entreprendre
          et la liberté de création du métier de développeur.
        </p>
      </div>
      <ContactSupportIcon style={{ fontSize: 100 }} outlined />
    </div>
  );
}
