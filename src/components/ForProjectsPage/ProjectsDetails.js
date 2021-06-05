/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
  backDetailsProjet: {
    color: '#deb992',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 45,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      maxWidth: '100%',
      margin: 0,
    },
  },
  stacks: {
    display: 'flex',
    width: '50em',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      maxWidth: '100%',
      flexWrap: 'wrap',
    },
  },
  stacksList: {
    width: 'auto',
    marginLeft: 20,
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'flex-start',
    padding: 0,
  },
  link: {
    color: '#deb992',
    textDecoration: 'none',
  },
  linkGithub: {
    color: '#87CEFA',
    textDecoration: 'none',
  },
  projectStacks: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  }
});

export default function ProjectsDetails({ projectSelected }) {
  const classes = useStyles();
  const [project] = projectSelected;
  const {
    name,
    team,
    text,
    front,
    back,
    database,
    versionning,
    deployment,
  } = project;
  return (
    <>
      <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
        <div className={classes.backDetailsProjet}>
          <Link
            className={classes.link}
            href="https://dolly-the-sheep.netlify.app/"
            target="_blank"
          >
            <h4>{name}</h4>
          </Link>
          <i><strong>{text}</strong></i>
          {team && <p>Équipe : {team}</p>}
          <div className={classes.projectStacks}>
            <div className={classes.stacks}>
              <p>Interface :</p>
              <ul className={classes.stacksList}>
                {Object.values(front).map((element) => (
                  <li>{element}</li>
                ))}
              </ul>
            </div>
            {back && (
              <div className={classes.stacks}>
                <p>Serveur :</p>
                <ul className={classes.stacksList}>
                  {Object.values(back).map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
              </div>
            )}
            {database && (
              <div className={classes.stacks}>
                <p>Base de données:</p>
                <ul className={classes.stacksList}>
                  {Object.values(database).map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={classes.stacks}>
              <p>Gestion des versions :</p>
              <ul className={classes.stacksList}>
                {Object.values(versionning).map((element) => (
                  <li>{element}</li>
                ))}
              </ul>
            </div>
            <div className={classes.stacks}>
              <p>Déploiement :</p>
              <ul className={classes.stacksList}>
                {Object.values(deployment).map((element) => (
                  <li>{element}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            className={classes.linkGithub}
            href="https://github.com/WildCodeSchool/lyon-js-react-march21-g2-p2"
            target="_blank"
          >
            <p>Détails du code</p>
          </Link>
        </div>
      </Fade>
    </>
  );
}
