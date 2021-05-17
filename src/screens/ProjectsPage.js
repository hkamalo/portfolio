/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import ProjectsDisplay from '../components/ForProjectsPage/ProjectsDisplay';
import ProjectsDetails from '../components/ForProjectsPage/ProjectsDetails';
// import { faServer, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

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
  details: {
    width: '50%',
    height: '20%',
    marginBottom: 50,
  },
});

export default function ProjectsPage() {
  const classes = useStyles();
  const iconHtml = <FontAwesomeIcon icon={faHtml5} size="3x" color="#FF5722" />;
  const iconCss = <FontAwesomeIcon icon={faCss3} size="3x" color="#2979FF" />;
  const iconReact = (
    <FontAwesomeIcon icon={faReact} size="3x" color="#00E5FF" />
  );
  const iconNode = <FontAwesomeIcon icon={faNode} size="3x" color="#4CAF50" />;

  const project = {
    name: 'Dolly',
    text:
      'Dolly est une application web qui offre au client de pouvoir consulter les informations concernants ses films favoris',
    stack: {
      html: iconHtml,
      css: iconCss,
      react: iconReact,
      node: iconNode,
    },
  };
  return (
    <Grow in timeout={1900} style={{ transitionDelay: '700ms' }}>
      <div className={classes.projetBackground}>
        <div className={classes.backgroundProjet}>
          <div className={classes.projectsHeader}>
            <h2>Projets</h2>
          </div>
          <ProjectsDisplay />
        </div>
        <div className={classes.details}>
          <ProjectsDetails
            projectName={project.name}
            projectText={project.text}
            stacks={project.stack}
          />
        </div>
      </div>
    </Grow>
  );
}
