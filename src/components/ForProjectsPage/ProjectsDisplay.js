import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  projectsDisplay: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  projects: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    width: 'calc(100% - 40px)',
    height: 200,
    justifyContent: 'center',
    marginTop: 20,
  },
  projectCardA: {
    flexGrow: '0.7',
    margin: 5,
  },
  projectCardB: {
    flexGrow: '0.3',
    margin: 5,
  },
  media: {
    width: '100%',
    height: '60%',
    paddingBottom: '56.25%',
    clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
});

export default function ProjectsDisplay() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectsDisplay}>
        <div className={classes.projects}>
          <Card className={classes.projectCardA}>
            <CardMedia className={classes.media} />
            <CardContent>Site vitrine</CardContent>
          </Card>
          <Card className={classes.projectCardB}>
            <CardMedia className={classes.media} />
            <CardContent>P2 - Dolly</CardContent>
          </Card>
        </div>
        <div className={classes.projects}>
          <Card className={classes.projectCardB}>
            <CardMedia className={classes.media} />
            <CardContent>Hackathon</CardContent>
          </Card>
          <Card className={classes.projectCardA}>
            <CardMedia className={classes.media} />
            <CardContent>P3</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
