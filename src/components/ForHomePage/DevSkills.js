import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  skillsElements: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default function DevSkills() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.skillsElements}>
        <p>Interface</p>
        <p>Serveur</p>
        <p>Générale</p>
      </div>
    </>
  );
}
