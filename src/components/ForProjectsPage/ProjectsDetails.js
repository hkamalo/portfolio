/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
  backDetailsProjet: {
    position: 'relative',
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
    width: 400,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      maxWidth: '100%',
      flexWrap: 'wrap',
    },
  },
  stacksList: {
    width: '80%',
    marginLeft: 20,
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
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
});

export default function ProjectsDetails({ projectSelected }) {
  const classes = useStyles();
  const [project] = projectSelected;
  const { name, team, text, stack, deployment } = project;
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
          <>{text}</>
          <p>Équipe : {team}</p>
          <div className={classes.stacks}>
            <p>Stack :</p>
            <ul className={classes.stacksList}>
              {stack.map(element => (
                <li>{element}</li>
              ))}
            </ul>
          </div>
          <div className={classes.stacks}>
            <p>Deploiement :</p>
            <ul className={classes.stacksList}>
              {deployment.map(element => (
                <li>{element}</li>
              ))}
            </ul>
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
