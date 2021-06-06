import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme();

const useStyles = makeStyles(() => ({
  skillsElements: {
    MaxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: '#051622',
    color: '#deb992',
    borderLeft: '1px solid #deb992 ',
    borderRadius: 0,
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'none',
      borderRadius: 0,
      flexWrap: 'wrap',
    },
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
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      paddingTop: 0,
      margin: 0,
    },
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
    alignItems: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    width: '100%',
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
    textAlign: 'center',
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 10px)',
    alignItems: 'center',
    flexDirection: 'column',
  },
  proUnstyle: {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: '12px',
    textAlign: 'ceter',
  },
  proTitle: {
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
      <Paper elevation={0} className={classes.skillsElements}>
        <div className={classes.content}>
          <h4>Diplôme</h4>
          <div className={classes.proDetail}>
            <p className={classes.proTitle}>Master</p>
            <p className={classes.proUnstyle}>
              Management & Stratégie d’Entreprise
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <h4>Professionel</h4>
          <div className={classes.proBackground}>
            <div className={classes.proDetail}>
              <p className={classes.proTitle}>Business Developer</p>
              <p className={classes.proUnstyle}>2 ans</p>
              <p className={classes.proUnstyle}>Ingénierie Industrielle</p>
            </div>
            <div className={classes.proDetail}>
              <p className={classes.proTitle}>Commercial Itinérant</p>
              <p className={classes.proUnstyle}>1 an</p>
              <p className={classes.proUnstyle}>Service aux entreprises</p>
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
                <li>Relation client</li>
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
