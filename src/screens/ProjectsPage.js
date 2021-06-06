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
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import ProjectsDisplay from '../components/ForProjectsPage/ProjectsDisplay';
import ProjectsDetails from '../components/ForProjectsPage/ProjectsDetails';
import mysqlSrc from '../images/mysql-logo.png';
import herokuSrc from '../images/heroku-logo.png';
import netlifySrc from '../images/netlify-logo.png';
import expressSrc from '../images/expressjs.png';
import apacheSrc from '../images/apache-logo.png';
import mongoSrc from '../images/mongodb-logo.png';
import materialUiSrc from '../images/materialUI.png';

const theme = createMuiTheme();

const useStyles = makeStyles({
  projetBackground: {
    backgroundColor:
      'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  backDetailsProjet: {
    background: '#FFFFFF',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  details: {
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
  const iconGithub = (
    <FontAwesomeIcon icon={faGithubSquare} size="3x" color="white" />
  );
  const iconExpress = (
    <img src={expressSrc} width="144" height="48" alt="expressLogo" />
  );
  const iconMysql = (
    <img src={mysqlSrc} width="72" height="48" alt="mysqlLogo" />
  );
  const iconHeroku = (
    <img src={herokuSrc} width="31" height="48" alt="herokuLogo" />
  );
  const iconNetlify = (
    <img src={netlifySrc} width="140" height="48" alt="netflifyLogo" />
  );
  const iconApache = (
    <img src={apacheSrc} width="48" height="48" alt="apacheLogo" />
  );
  const iconMongo = (
    <img src={mongoSrc} width="70" height="48" alt="mongoLogo" />
  );
  const iconMaterialUi = (
    <img src={materialUiSrc} width="48" height="48" alt="materialUiLogo" />
  );

  const projects = [
    {
      name: 'Paper Rock Scissors',
      team: '3 développeurs en méthode AGILE/SCRUM',
      text: 'Jeux pierre papier ciseaux',
      front: { html: iconHtml, css: iconCss },
      versionning: { github: iconGithub },
      deployment: { netlify: iconNetlify },
      webLink: 'https://prs-game.netlify.app/',
      githubLink: 'https://github.com/Herelius/Wilders',
    },
    {
      name: 'Dolly',
      team: '5 développeurs en méthode AGILE/SCRUM',
      text:
        'Dolly est une application web qui permet aux visiteurs de consulter toutes les informations concernants leurs films favoris',
      front: {
        html: iconHtml,
        css: iconCss,
        react: iconReact,
        material: iconMaterialUi,
      },
      back: {
        node: iconNode,
        express: iconExpress,
      },
      database: {
        mysql: iconMysql,
      },
      versionning: { github: iconGithub },
      deployment: { netlify: iconNetlify, heroku: iconHeroku },
      weblink: 'https://dolly-the-sheep.netlify.app/',
      githubLink:
        'https://github.com/WildCodeSchool/lyon-js-react-march21-g2-p2',
    },
    {
      name: 'Portfolio',
      text: 'Présentation de mon profil',
      front: {
        html: iconHtml,
        css: iconCss,
        react: iconReact,
        material: iconMaterialUi,
      },
      back: {
        node: iconNode,
        express: iconExpress,
      },
      versionning: { github: iconGithub },
      deployment: { apache: iconApache, heroku: iconHeroku },
      weblink: 'https://www.hkamalo.com',
      githubLink: 'https://github.com/hkamalo/portfolio',
    },
    {
      name: 'HD Rain',
      team: '5 développeurs en méthode AGILE/SCRUM',
      text:
        'Intranet pour la visualisation de données météorologiques (en cours)',
      front: {
        html: iconHtml,
        css: iconCss,
        react: iconReact,
      },
      back: {
        node: iconNode,
        express: iconExpress,
      },
      database: {
        mongo: iconMongo,
      },
      versionning: { github: iconGithub },
      deployment: { general: 'à venir' },
    },
  ];

  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [projectSelected, setProjetSelected] = useState([]);

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
