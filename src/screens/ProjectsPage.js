/* eslint-disable no-console */
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
import mysqlLogo from '../images/mysql-logo.png';
import herokuLogo from '../images/heroku-logo.png';
import netlifyLogo from '../images/netlify-logo.png';
import expressLogo from '../images/expressjs.png';
import apacheLogo from '../images/apache-logo.png';
import mongoLogo from '../images/mongodb-logo.png';

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
      height: 'auto',
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
      padding: 0,
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
      height: 'auto',
      margin: 0,
      padding: 0,
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
  const [projectSelected, setProjetSelected] = useState([]);

  const projects = [
    {
      name: 'Paper Rock Scissors',
      team: '3 développeurs en méthode AGILE/SCRUM',
      text: 'Jeux pierre papier ciseaux',
      stack: { iconHtml, iconCss },
      deployment: [netlifyLogo],
    },
    {
      name: 'Dolly',
      team: '5 développeurs en méthode AGILE/SCRUM',
      text:
        'Dolly est une application web qui permet aux visiteurs de consulter toutes les informations concernants leurs films favoris',
      stack: [iconHtml, iconCss, iconReact, iconNode, expressLogo, mysqlLogo],
      deployment: [netlifyLogo, herokuLogo],
    },
    {
      name: 'Portfolio',
      team: 'Non',
      text: 'Présentation de mon profil',
      stack: [iconHtml, iconCss, iconReact, iconNode, expressLogo],
      deployment: [apacheLogo, herokuLogo],
    },
    {
      name: 'HD Rain',
      team: '5 développeurs en méthode AGILE/SCRUM',
      text:
        'Intranet pour la visualisation de données météorologiques (en cours)',
      stack: [iconHtml, iconCss, iconReact, iconNode, expressLogo, mongoLogo],
      deployment: ['??', '??'],
    },
  ];

  const handleClick = (event) => {
    setProjetSelected(
      projects.filter(({ name }) => name === event.currentTarget.id)
    );
    setShowProjectDetails(true);
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
            <ProjectsDetails projectSelected={projectSelected} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </Grow>
  );
}
