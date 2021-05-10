/* eslint-disable react/self-closing-comp */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  projetBackground: {
    backgroundColor: 'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
    position: 'relative',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundProjet: {
    backgroundColor: '#F7EEFF',
    width: '50%',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
    
    
  },
  projectsDisplay: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    height: 500
  },
  backDetailsProjet: {
    background: '#FFFFFF',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  
});

export default function ProjectsPage() {
  const classes = useStyles();

  return (
    <div className={classes.projetBackground}>
      <div className={classes.backgroundProjet}>
        <div className={classes.projectsHeader}>
          <h4>Projets</h4>
        </div>
        <div className={classes.projectsDisplay}>
          <div>
            <p>Site vitrine</p>
            <p>P2 - Dolly</p>
          </div>
          <div>
            <p>Hackathon</p>
            <p>P3</p>
          </div>
        </div>
      </div>
      <div className={classes.backDetailsProjet}>
        <h4> Details Technique</h4>
      </div>
    </div>
  );
}
