import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  projectsDisplay: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
  },
});

export default function ProjectsDisplay() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectsDisplay}>
        <div>
          <p>Site vitrine</p>
          <p>P2 - Dolly</p>
        </div>
        <div>
          <p>Hackathon</p>
          <p>P3</p>
        </div>
      </div>
    </>
  );
}
