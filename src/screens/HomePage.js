/* eslint-disable import/no-named-as-default */
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Collapse, Slide, Zoom, Grow } from '@material-ui/core';
import DevSkills from '../components/ForHomePage/DevSkills';
import Background from '../components/ForHomePage/Background';
import ScrollHandlerContext from '../contexts/ScrollHandler';
import About from '../components/ForHomePage/About';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
  home: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  skillsContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: 'auto',
    maxHeight: '100%',
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '100%',
    height: '100%',
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
        <Grow in timeout={2100} style={{ transitionDelay: '700ms' }}>
          <div className={classes.content}>
            <About />
          </div>
        </Grow>
        <Grow in timeout={2100} style={{ transitionDelay: '750ms' }}>
          <div className={classes.skillsContent}>
            <h2>#Developper</h2>
            <div className={classes.skills}>
              <DevSkills />
            </div>
          </div>
        </Grow>
        <Grow in timeout={2100} style={{ transitionDelay: '800ms' }}>
          <div className={classes.skillsContent}>
            <h2>#Background</h2>
            <div className={classes.skills}>
              <Background />
            </div>
          </div>
        </Grow>
      </div>
    </>
  );
}
