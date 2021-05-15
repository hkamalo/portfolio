import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
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
    width: 'calc(35vw - 40px)',
    height: 200,
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: 20,
  },
  projectCardA: {
    flexGrow: '0.7',
    margin: 2,
    height: '100%',
  },
  cards: {
    position: 'relative',
    minWidth: '100%',
    height: '100%',
    // '&:after': {
    //   content: '""',
    //   display: 'block',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '64%',
    //   bottom: 0,
    //   zIndex: 1,
    //   background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    // }
  },
  projectCardB: {
    flexGrow: '0.3',
    transition: 'flex-grow 0.5s',
    margin: 2,
    height: '100%',
    '&:hover': {
      flexGrow: '1.2',
      transition: 'flex-grow 0.5s',
    },
  },
  media: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundPosition: 'center',
    // paddingBottom: 191,
    // clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    // transition: 'clip-path 0.5s',
    // '&:hover': {
    //   clipPath: 'polygon(0 0, 100% 0%, 100% 50%, 0% 100%)',
    // },
  },
  content: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    padding: '1em',
  },
});

export default function ProjectsDisplay() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectsDisplay}>
        <div className={classes.projects}>
          <div className={classes.projectCardA}>
            <Card className={classes.cards}>
              <CardMedia className={classes.media} image={p1Screenshoot} />
              <CardContent className={classes.content}>
                <TextInfoContent>P2 Dolly</TextInfoContent>
              </CardContent>
            </Card>
          </div>
          <div className={classes.projectCardB}>
            <Card className={classes.cards}>
              <CardMedia className={classes.media} />
              <CardContent className={classes.content}>
                <TextInfoContent>site vitrine</TextInfoContent>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* <div className={classes.projects}>
          <Card className={classes.projectCardB}>
            <CardMedia className={classes.media} />
            <CardContent>Hackathon</CardContent>
          </Card>
          <Card className={classes.projectCardA}>
            <CardMedia className={classes.media} />
            <CardContent>P3</CardContent>
          </Card>
        </div> */}
      </div>
    </>
  );
}
