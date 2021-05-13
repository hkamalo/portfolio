import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  skillsElements: {
    MaxWidth: '100%',
    maxHeight: '100%',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '35px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mawHeight: '100%',
    width: 180,
    MaxHeight: 250,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backgroundSkills: {
    display: 'flex',
  },
  unstyle: {
    listStyle: 'none',
  },
}));

export default function Background() {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.skillsElements}>
        <div className={classes.content}>
          <h4>Diplome</h4>
          <div>
            <p>
              <strong>Master</strong> Management & Stratégie d’Entreprise
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <h4>Professional</h4>
          <div>
            <p>
              <strong>Business Developer</strong> - 2 ans
            </p>
            <p>
              <strong>Commercial Itinérant</strong> - 1 an
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <h4>Acquis</h4>
          <div className={classes.backgroundSkills}>
            <div className={classes.hardSKills}>
              <p>
                <strong>Savoir faire</strong>
              </p>
              <ul className={classes.unstyle}>
                <li>Pilotage d’un projet</li>
                <li>Relationnelle client</li>
                <li>Travail en équipe</li>
                <li>Maîtrise de l’anglais</li>
              </ul>
            </div>
            <div className={classes.softSkills}>
              <p>
                <strong>Savoir être</strong>
              </p>
              <ul className={classes.unstyle}>
                <li>Entrepreneur</li>
                <li>Rigoureux</li>
                <li>Sociable</li>
              </ul>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}
