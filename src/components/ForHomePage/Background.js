import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  skillsElements: {
    MaxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '35px',
    background: '#051622',
    color: '#deb992',
    border: '2px outset #deb992 '
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 230,
    height: 300,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
  },
  backgroundSkills: {
    display: 'flex',
    MaxHeight: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },

  proBackground: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    MaxHeight: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },
  unstyle: {
    marginLeft: 20,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    textAlign: 'left',
    minHeight: '100%',
    fontSize: '12px',
  },
  hardSkills: {
    textAlign: 'start',
    marginLeft: '15px',
    width: 'calc(100% / 2)',
  },
  softSkills: {
    textAlign: 'start',
    marginLeft: '15px',
    width: 'calc(100% / 2)',
  },
  proDetail: {
    textAlign: 'start',
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 10px)',
    alignItems: 'center',
  },
  proUnstyle: {
    marginLeft: 10,
    padding: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: '12px',
  },
  proTitle: {
    marginLeft: 10,
    padding: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
}));

export default function Background() {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.skillsElements}>
        <div className={classes.content}>
          <h4>Diplome</h4>
          <div className={classes.proDetail}>
            <p className={classes.proTitle}>Master</p>
            <p className={classes.proUnstyle}>
              Management & Stratégie d’Entreprise
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <h4>Professional</h4>
          <div className={classes.proBackground}>
            <div className={classes.proDetail}>
              <p className={classes.proTitle}>Business Developer </p>
              <p className={classes.proUnstyle}>2 ans</p>
            </div>
            <div className={classes.proDetail}>
              <p className={classes.proTitle}>Commercial Itinérant</p>
              <p className={classes.proUnstyle}>1 an</p>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <h4>Acquis</h4>
          <div className={classes.backgroundSkills}>
            <div className={classes.hardSkills}>
              <p>Savoir faire</p>
              <ul className={classes.unstyle}>
                <li>Pilotage d’un projet</li>
                <li>Relationnelle client</li>
                <li>Travail en équipe</li>
                <li>Maîtrise de l’anglais</li>
              </ul>
            </div>
            <div className={classes.softSkills}>
              <p>Savoir être</p>
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
