/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Slide } from '@material-ui/core';

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
  image: {
    margin: 10,
    padding: 10,
    width: '1em',
    height: '1em',
    borderRadius: '50%',
  },
});

export default function About({show}) {
  const classes = useStyles();

  return (
    <Slide direction="left" in={show} mountOnEnter timeout={2000}>
      <div className={classes.aboutSection}>
        <div className={classes.text}>
          <h2>About</h2>
          <p>
            Après un parcours en centré sur le business et le management j’ai
            décidé d’évoluer dans le numérique, poussé par l'envie
            d'entreprendre et la liberté de création du métier de développeur.
          </p>
        </div>
        <ContactSupportIcon style={{ fontSize: 100 }} outlined />
      </div>
    </Slide>
  );
}
