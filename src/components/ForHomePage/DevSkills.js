import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  skillsElements: {
    MaxWidth: '100%',
    maxHeight: '100%',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '1px solid green',
  },
  front: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mawHeight: '100%',
    border: '1px solid blue',
    width: 180,
  },
  picture: {
    widht: 50,
    height: 50,
  },
});

export default function DevSkills() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.skillsElements}>
        <div className={classes.front}>
          <img
            className={classes.picture}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fillustricon-tech%2F512%2Fbrowser.development-512.png&f=1&nofb=1"
            alt="front end"
          />
          <h4>Interface</h4>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Material UI</li>
            <li>VanillaJS</li>
            <li>React</li>
          </ul>
        </div>
        <div className={classes.front}>
          <img
            className={classes.picture}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fskill_page%2Fcontent%2Flogo_file%2Flogo%2F6268%2Fback_end-dc36d1943fb2722f56f960c424c423d1.png&f=1&nofb=1"
            alt="back end"
          />
          <h4>Serveur</h4>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Netlify</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div className={classes.front}>
          <img
            className={classes.picture}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fillustricon-tech%2F512%2Fbrowser.development-512.png&f=1&nofb=1"
            alt="front end"
          />
          <h4>Interface</h4>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Material UI</li>
            <li>VanillaJS</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </>
  );
}
