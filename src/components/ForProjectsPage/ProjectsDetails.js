import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  backDetailsProjet: {
    background: '#FFFFFF',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default function ProjectsDetails() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.backDetailsProjet}>
        <h4> Details Technique</h4>
      </div>
    </>
  );
}
