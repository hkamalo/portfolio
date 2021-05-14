/* eslint-disable react/self-closing-comp */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectsDisplay from '../components/ForProjectsPage/ProjectsDisplay';
import ProjectsDetails from '../components/ForProjectsPage/ProjectsDetails';

const useStyles = makeStyles({
  projetBackground: {
    backgroundColor:
      'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
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
    margin: 20,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 10,
  },
  projectsDisplay: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
  },
  backDetailsProjet: {
    background: '#FFFFFF',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default function ProjectsPage() {
  const classes = useStyles();

  return (
    <div className={classes.projetBackground}>
      <div className={classes.backgroundProjet}>
        <div className={classes.projectsHeader}>
          <h2>Projets</h2>
        </div>
        <ProjectsDisplay />
      </div>
      <ProjectsDetails />
    </div>
  );
}
