import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import p1Screenshoot from '../../images/Screenshot_2021-05-14 🍿 Dolly 🍿.jpg';

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
    transition: 'flex-grow 0.5s',
    '&:hover': {
      flexGrow: '1',
    },
  },
  media: {
    width: '100%',
    height: 0,
    paddingBottom: 191,
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    transition: 'clip-path 0.5s',
    '&:hover': {
      clipPath: 'polygon(0 0, 100% 0%, 100% 50%, 0% 100%)',
    },
  },
});

export default function ProjectsDisplay() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectsDisplay}>
        <div className={classes.projects}>
          <Card className={classes.projectCardA}>
            <CardMedia className={classes.media} image={p1Screenshoot} />
            <CardContent>P2 - Dolly</CardContent>
          </Card>
          <Card className={classes.projectCardB}>
            <CardMedia className={classes.media} />
            <CardContent>Site vitrine</CardContent>
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
