import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Zoom } from '@material-ui/core';

const useStyles = makeStyles({
  backDetailsProjet: {
    position: 'relative',
    color: '#deb992',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderSize: '10%',
    '&:hover': {
      borderTop: '1px solid #deb992',
    },
  },
  stacks: {
    display: 'flex',
    width: 400,
    justifyContent: 'space-between',
  },
  stacksList: {
    width: '80%',
    marginLeft: 20,
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    padding: 0,
  },
});

export default function ProjectsDetails({ projectName, projectText, stacks }) {
  const classes = useStyles();
  const { html, css, react, node } = stacks;
  return (
    <>
      <Zoom in timeout={1000} style={{ transitionDelay: '300ms' }}>
        <div className={classes.backDetailsProjet}>
          <h4>{projectName}</h4>
          <p>{projectText}</p>
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
      </Zoom>
    </>
  );
}
