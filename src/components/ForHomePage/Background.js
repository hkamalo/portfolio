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

export default function Background() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.skillsElements}>
        <p>Diplome</p>
        <p>Profesionnel</p>
        <p>Skills</p>
      </div>
    </>
  );
}
