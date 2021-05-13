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
  },
  front: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mawHeight: '100%',
    width: 180,
    height: 250,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
  },
  picture: {
    widht: 50,
    height: 50,
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
    <FontAwesomeIcon icon={faUncharted} size="3x" color="black" />
  );

  return (
    <>
      <Paper elevation={3} className={classes.skillsElements}>
        <div className={classes.front}>
          <div>{iconFront}</div>
          <h4>Interface</h4>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Material UI</li>
            <li>VanillaJS</li>
            <li>React</li>
          </ul>
        </div>
        <div className={classes.front}>
          <div>{iconServer}</div>
          <h4>Serveur</h4>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Netlify</li>
          </ul>
        </div>
        <div className={classes.front}>
          <div>{iconGenerale}</div>
          <h4>Generale</h4>
          <ul>
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
