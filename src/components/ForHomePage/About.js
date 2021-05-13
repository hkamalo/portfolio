import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logo/logo_small.png';

const useStyles = makeStyles({
  aboutSection: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid',
    width: '50%',
    MaxWidth: '100%',
    textAlign: 'justify',
    
  },
  image: {
    margin: 10,
  padding: 10,
    width: 500,
    height: 96,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutSection}>
      <div className={classes.text}>
        <h2>About</h2>
        <p>
          J’ai décidé d’évoluer dans l’univers tech après un parcours axé sur le
          business et le management.
        </p>
        <p>
          Ce qui m’a motivé dans cette décision est la liberté de création
          offert par le métier de développeur.
        </p>
      </div>
      <img
        className={classes.image}
        src={logo}
        alt=""
      />
    </div>
  );
}
