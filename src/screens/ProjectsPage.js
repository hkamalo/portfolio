/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
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

const theme = createMuiTheme();

const useStyles = makeStyles({
  projetBackground: {
    backgroundColor:
      'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
    position: 'relative',
    height: '100vh',
    width: '70vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      Maxwidth: '100%',
      height: 'auto'
    },
  },
  backgroundProjet: {
    color: '#deb992',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 10,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      Maxwidth: '100%',
      height: '100%',
      margin: 0,
      padding: 0
    },
  },
  projectsDisplay: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '100%',
    },
  },
  backDetailsProjet: {
    background: '#FFFFFF',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  details: {
    height: '20%',
    marginBottom: 50,
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%',
      maxWidth: '100%',
      height: 'auto'
    },
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

  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const handleClick = () => {
    setShowProjectDetails(true);
  };

  const project = {
    name: 'Dolly',
    team: '5 développeurs en méthode AGILE/SCRUM',
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
    <Grow in timeout={2100} style={{ transitionDelay: '700ms' }}>
      <div className={classes.projetBackground}>
        <div className={classes.backgroundProjet}>
          <h2>#Projets</h2>
          <ProjectsDisplay handleClick={handleClick} />
        </div>
        {showProjectDetails ? (
          <div className={classes.details}>
            <ProjectsDetails
              projectName={project.name}
              projectTeam={project.team}
              projectText={project.text}
              stacks={project.stack}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </Grow>
  );
}
