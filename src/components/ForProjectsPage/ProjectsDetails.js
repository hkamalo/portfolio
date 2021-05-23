import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Collapse, Zoom, Slide, Fade, Link } from '@material-ui/core';

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
});

export default function ProjectsDetails({
  projectName,
  projectTeam,
  projectText,
  stacks,
}) {
  const classes = useStyles();
  const { html, css, react, node } = stacks;
  return (
    <>
      <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
        <div className={classes.backDetailsProjet}>
          <Link
            className={classes.link}
            href="https://dolly-the-sheep.netlify.app/"
            target="_blank"
          >
            <h4>{projectName}</h4>
          </Link>
          <>{projectText}</>
          <p>Équipe : {projectTeam}</p>
          <div className={classes.stacks}>
            <p>Stack :</p>
            <ul className={classes.stacksList}>
              <li>{html}</li>
              <li>{css}</li>
              <li>{react}</li>
              <li>{node}</li>
            </ul>
          </div>
        </div>
      </Fade>
    </>
  );
}
