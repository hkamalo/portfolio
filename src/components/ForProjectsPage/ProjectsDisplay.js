import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import Box from '@material-ui/core/Box';
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
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
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
    paddingBottom: 0,
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    transition: 'clip-path 0.5s',
        '&:hover': {
          clipPath: 'polygon(0 0, 100% 0%, 100% 75%, 0% 100%)',
      },
  },
  content: {
    background: "white",
    width: '50%',
    padding: 5,
    textAlign: 'end',
    height: 'calc(100% - 90%)',
    transition: 'opacity 0.5s ease',
  },
  text: {
    margin: 0
  }
});

export default function ProjectsDisplay() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectsDisplay}>
        <div className={classes.projects}>
          <div className={classes.projectCardA}>
            <Card className={classes.cards}>
              <Box className={classes.content}>
                <p className={classes.text}>P2 - projets Dolly</p>
              </Box>
              <CardMedia className={classes.media} image={p1Screenshoot} />
            </Card>
          </div>
          <div className={classes.projectCardB}>
            <Card className={classes.cards}>
              <Box className={classes.content}>
                <p className={classes.text}>Projets 2</p>
              </Box>
              <CardMedia className={classes.media} />
            </Card>
          </div>
        </div>
        <div className={classes.projects}>
          <div className={classes.projectCardB}>
            <Card className={classes.cards}>
              <CardMedia className={classes.media} />
              <Box className={classes.content}>
                <p className={classes.text}>Projets 2</p>
              </Box>
            </Card>
          </div>
          <div className={classes.projectCardA}>
            <Card className={classes.cards}>
              <CardMedia className={classes.media} image={p1Screenshoot} />
              <Box className={classes.content}>
                <p className={classes.text}>P2 - projets Dolly</p>
              </Box>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
