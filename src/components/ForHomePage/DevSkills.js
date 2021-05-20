/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faServer, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
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
    borderLeft: '5px outset #deb992 ',
  },
  front: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 230,
    height: 300,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
  },
  picture: {
    marginTop: '20px',
  },
  skillsList: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default function DevSkills() {
  const classes = useStyles();
  const iconFront = (
    <FontAwesomeIcon icon={faWindowRestore} size="3x" color="#87CEFA" />
  );
  const iconServer = (
    <FontAwesomeIcon icon={faServer} size="3x" color="#FFD700" />
  );
  const iconGenerale = (
    <FontAwesomeIcon icon={faUncharted} size="3x" color="white" />
  );

  return (
    <>
      <Paper elevation={0} className={classes.skillsElements}>
        <div className={classes.front}>
          <div className={classes.picture}>{iconFront}</div>
          <h4>Interface</h4>
          <ul className={classes.skillsList}>
            <li>Html</li>
            <li>CSS</li>
            <li>Material UI</li>
            <li>VanillaJS</li>
            <li>React</li>
          </ul>
        </div>
        <div className={classes.front}>
          <div className={classes.picture}>{iconServer}</div>
          <h4>Serveur</h4>
          <ul className={classes.skillsList}>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Netlify</li>
          </ul>
        </div>
        <div className={classes.front}>
          <div className={classes.picture}>{iconGenerale}</div>
          <h4>Generale</h4>
          <ul className={classes.skillsList}>
            <li>Git</li>
            <li>Git hub</li>
            <li>Figma</li>
            <li>SCRUM</li>
            <li>TDD</li>
          </ul>
        </div>
      </Paper>
    </>
  );
}
