import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import About from '../components/ForHomePage/About';
import DevSkills from '../components/ForHomePage/DevSkills';
import Background from '../components/ForHomePage/Background';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
  home: {
    position: 'relative',
    height: 1500,
    width: 'auto',
    background:
      'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 50,
    width: 'auto',
    margin: 5,
    padding: 2,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    height: '20%',
    border: 'solid 1px',
    margin: 20,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 0,
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '60%',
    background: '#FFFFFF',
    boxShadow:
      '0px 0px 100px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 170,
  },
  skillsElements: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.home}>
        <div className={classes.content}>
          <About />
        </div>
        <div className={classes.content}>
          <div className={classes.skills}>
            <DevSkills />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.skills}>
            <Background />
          </div>
        </div>
      </div>
    </>
  );
}
