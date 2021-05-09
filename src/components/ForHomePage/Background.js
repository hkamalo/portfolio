import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
  home: {
    position: 'relative',
    height: 1500,
    width: 'auto',
    background:
      'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 50,
    width: 'auto',
    margin: 5,
    padding: 2,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    height: '20%',
    border: 'solid 1px',
    margin: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '60%',
    background: '#FFFFFF',
    boxShadow:
      '0px 0px 100px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 170,
  },
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
