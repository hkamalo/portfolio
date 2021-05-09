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
        <div>
          <h4>Diplome</h4>
          <div>
            <p>Master Management & Stratégie d’Entreprise</p>
          </div>
        </div>
        <div>
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
        <div>
          <h4>Acquis</h4>
          <div className={classes.hardSKills}>
            <h5>Savoir faire</h5>
            <ul>
              <li>Pilotage d’un projet</li>
              <li>Relationnelle client</li>
              <li>Travail en équipe</li>
              <li>Maîtrise de l’anglais</li>
            </ul>
          </div>
          <div className={classes.softSkills}>
            <h5>Savoir être</h5>
            <ul>
              <li>Entrepreneur</li>
              <li>Rigoureux</li>
              <li>Sociable</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
