/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const theme = createMuiTheme();

const useStyles = makeStyles({
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    height: '50vh',
    [theme.breakpoints.down('sm')]: {},
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    textAlign: 'justify',
    margin: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  text: {
    margin: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      borderBottom: '1px solid',
      paddingBottom: 100,
    },
  },
  infoIcon: {
    margin: 10,
    padding: 10,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutSection}>
      <div className={classes.content}>
        <ContactSupportIcon
          className={classes.infoIcon}
          style={{ fontSize: 100 }}
          outlined
        />
        <p className={classes.text}>
          Après un parcours centré sur le business et le management j’ai décidé
          d’évoluer dans le numérique, poussé par l'envie d'entreprendre et la
          liberté de création du métier de développeur.
        </p>
      </div>
    </div>
  );
}
