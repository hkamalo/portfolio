import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  backDetailsProjet: {
    color: '#deb992',
    borderTop: '2px solid #deb992 ',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
    </>
  );
}
