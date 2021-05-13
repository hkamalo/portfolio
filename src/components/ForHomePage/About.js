import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo from '../../logo/logo_small_icon_only_inverted.png';

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
  imageBg: {
    borderRadius: '50%',
    maxWidth: 149,
    maxHeight: 149,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 10,
    padding: 10,
    width: 150,
    height: 150,
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
      <Paper elevation={7} className={classes.imageBg}>
        <img className={classes.image} src={logo} alt="" />
      </Paper>
    </div>
  );
}
